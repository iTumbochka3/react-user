import { createContext } from 'react';
import UserStore from './users';

export const rootStoreContext = createContext({
  userStore: new UserStore()
});