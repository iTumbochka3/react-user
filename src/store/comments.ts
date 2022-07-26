import { makeAutoObservable } from "mobx";
import { IComment } from "../models/IComment";
import axios from 'axios';

class CommentStore {
    private url = 'https://gorest.co.in/public/v2';
    public comments: IComment[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public updateCommentsFromServer(postId: string): void {
        axios.get<IComment[]>(`${this.url}/posts/${postId}/comments`)
            .then(response => {
                this.comments = response.data;
            })
            .catch(e => console.log(e));
    }
}

export default CommentStore;