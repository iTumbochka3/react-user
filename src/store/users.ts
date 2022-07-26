import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import axios from 'axios';

class UserStore {
    private url = 'https://gorest.co.in/public/v2';
    public users: IUser[] = [];
    public total: string = '1';

    constructor() {
        makeAutoObservable(this);
    }

    public updateUsersFromServer(page: number): void {
        axios.get<IUser[]>(`${this.url}/users?page=${page}`)
            .then(response => {
                this.total = response.headers['x-pagination-pages'];
                this.users = response.data;
            })
            .catch(e => console.log(e));
    }

    public setUser(users: IUser[]): void {
        this.users = users;
    }

    public addUser(user: IUser): void {
        this.users.push(user)
    }
}

export default UserStore;