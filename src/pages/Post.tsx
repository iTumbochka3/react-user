import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../use-stores';
import { useParams } from "react-router-dom";
import { Descriptions, Button } from 'antd';
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
      <Descriptions title="Содержание">
        <Descriptions.Item label="Заголовок">{postStore.currentPost?.title}</Descriptions.Item>
        <Descriptions.Item label="Тело">{postStore.currentPost?.body}</Descriptions.Item>
      </Descriptions>
      <Button onClick={() => setShowComments(!showComments)}> Показать комментарии</Button>
      {showComments && postId && <CommentsComponent postId={postId} />}
    </>
  );
});

export default Post;