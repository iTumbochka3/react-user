import { makeAutoObservable } from "mobx";
import { IPost } from "../models/IPost";
import axios from 'axios';

class PostStore {
    private url = 'https://gorest.co.in/public/v2';
    public posts: IPost[] = [];
    public currentPost: IPost | null = null;
    public page: number = 1;
    public total: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    public updatePostsFromServer(userId: string): void {
        axios.get<IPost[]>(`${this.url}/users/${userId}/posts?page=${this.page}`)
            .then(response => {
                this.total = +response.headers['x-pagination-pages'];
                this.posts = response.data;
            })
            .catch(e => console.log(e));
    }

    public getPostById(postId: string): void {
        axios.get<IPost>(`${this.url}/posts/${postId}`)
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