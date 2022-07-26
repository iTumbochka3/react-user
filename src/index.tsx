import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import './index.css';
import App from './App';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Post from './pages/Post';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId/posts" element={<Posts />} />
        <Route path="/users/:userId/posts/:postId" element={<Post />} />
      </Route>
    </Routes>
  </BrowserRouter>
);