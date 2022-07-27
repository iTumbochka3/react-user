import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../use-stores';
import { useParams } from "react-router-dom";
import { Card, Button } from 'antd';
import CommentsComponent from '../components/CommentsComponent';

const Post: React.FC = observer(() => {
  const { postId } = useParams();
  const { postStore, commentStore } = useStores();
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    if (postId) {
      postStore.getPostById(postId);
      commentStore.updateCommentsFromServer(postId);
    }
  }, []);

  return (
    <>
      <Card className='post-card' title={postStore.currentPost?.title}>
        <p>{postStore.currentPost?.body}</p>
      </Card>
      {showComments && postId && <CommentsComponent postId={postId} />}
      <Button onClick={() => setShowComments(!showComments)}>Показать комментарии</Button>
    </>
  );
});

export default Post;