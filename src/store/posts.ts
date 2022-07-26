import { makeAutoObservable } from "mobx";
import { IPost } from "../models/IPost";
import axios from 'axios';
import { apiUrl } from "../constants";

class PostStore {
    public posts: IPost[] = [];
    public currentPost: IPost | null = null;
    public page: number = 1;
    public total: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    public updatePostsFromServer(userId: string): void {
        axios.get<IPost[]>(`${apiUrl}/users/${userId}/posts?page=${this.page}`)
            .then(response => {
                this.total = +response.headers['x-pagination-pages'];
                this.posts = response.data;
            })
            .catch(e => console.log(e));
    }

    public getPostById(postId: string): void {
        axios.get<IPost>(`${apiUrl}/posts/${postId}`)
            .then(response => {
                this.currentPost = response.data;
            })
            .catch(e => console.log(e));
    }

    public setPage(page: number): void {
        this.page = page;
    }
}

export default PostStore;