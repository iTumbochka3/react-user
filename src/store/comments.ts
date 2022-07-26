import { makeAutoObservable } from "mobx";
import { IComment } from "../models/IComment";
import axios from 'axios';
import { apiUrl } from "../constants";

class CommentStore {
    public comments: IComment[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public updateCommentsFromServer(postId: string): void {
        axios.get<IComment[]>(`${apiUrl}/posts/${postId}/comments`)
            .then(response => {
                this.comments = response.data;
            })
            .catch(e => console.log(e));
    }
}

export default CommentStore;