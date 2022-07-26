import { createContext } from 'react';
import CommentStore from './comments';
import PostStore from './posts';
import UserStore from './users';

export const rootStoreContext = createContext({
  userStore: new UserStore(),
  postStore: new PostStore(),
  commentStore: new CommentStore(),
});