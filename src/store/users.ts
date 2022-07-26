import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import axios from 'axios';

class UserStore {
    private url = 'https://gorest.co.in/public/v2';
    public users: IUser[] = [];
    public page: number = 1;
    public total: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    public updateUsersFromServer(): void {
        axios.get<IUser[]>(`${this.url}/users?page=${this.page}`)
            .then(response => {
                this.total = +response.headers['x-pagination-pages'];
                this.users = response.data;
            })
            .catch(e => console.log(e));
    }

    public setPage(page: number): void {
        this.page = page;
    }
}

export default UserStore;