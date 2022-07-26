import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import axios from 'axios';

class UserStore {
    private url = 'https://gorest.co.in/public/v2/users';
    public users: IUser[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public updateUsersFromServer(): void {
        axios.get<IUser[]>(this.url)
            .then(response => {
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