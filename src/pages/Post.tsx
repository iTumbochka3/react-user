import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../use-stores';
import { useParams } from "react-router-dom";

const Post: React.FC = observer(() => {
  const { postId } = useParams();
  const { postStore } = useStores();
  const [showComments, setShowComments] = useState(false);
  useEffect(() => { if (postId) postStore.getPostById(postId) }, []);
  return (
    <>
      {postId}
      {showComments}
    </>
  );
});

export default Post;