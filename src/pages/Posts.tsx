import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from "../use-stores";
import { useParams } from "react-router-dom";

const Posts: React.FC = observer(() => {
  const { userId } = useParams();
  const { postStore } = useStores();
  useEffect(() => {
    if (userId) postStore.updatePostsFromServer(userId)
  }, []);
  return (
    <>
    </>
  );
});

export default Posts;