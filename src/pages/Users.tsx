import React, { useEffect } from 'react';
import { List, Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from "../use-stores";
import { useNavigate } from 'react-router-dom';

const Users: React.FC = observer(() => {
  const { userStore } = useStores();
  useEffect(() => { userStore.updateUsersFromServer() }, [userStore.page]);

  const onChange: PaginationProps['onChange'] = pageNumber => {
    userStore.setPage(pageNumber);
  };

  const navigate = useNavigate();

  return (
    <>
      <List
        dataSource={userStore.users}
        renderItem={item => (
          <List.Item onClick={() => { navigate(`/users/${item.id}/posts`) }}>
            <List.Item.Meta
              title={item.name}
              description={item.email}
            />
          </List.Item>
        )}
      />
      <Pagination current={userStore.page} total={userStore.total} onChange={onChange} showSizeChanger={false} />
    </>
  );
});

export default Users;