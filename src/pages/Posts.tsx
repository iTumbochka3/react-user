import React, { useEffect } from 'react';
import { List, Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from "../use-stores";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Posts: React.FC = observer(() => {
  const { userId } = useParams();
  const { postStore } = useStores();

  useEffect(() => { if (userId) postStore.updatePostsFromServer(userId) }, [postStore.page]);

  const onChange: PaginationProps['onChange'] = pageNumber => {
    postStore.setPage(pageNumber);
  };

  const navigate = useNavigate();

  return (
    <>
      <List
        dataSource={postStore.posts}
        renderItem={item => (
          <List.Item onClick={() => { navigate(`/users/${userId}/posts/${item.id}`) }}>
            <List.Item.Meta
              title={item.title}
            />
          </List.Item>
        )}
      />
      <Pagination current={postStore.page} total={postStore.total} onChange={onChange} showSizeChanger={false} />
    </>
  );
});

export default Posts;