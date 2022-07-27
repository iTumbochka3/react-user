import React, { useEffect } from 'react';
import { List, Pagination, Avatar } from 'antd';
import type { PaginationProps } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from "../use-stores";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';

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
        bordered
        itemLayout="horizontal"
        dataSource={userStore.users}
        renderItem={item => (
          <List.Item onClick={() => { navigate(`/users/${item.id}/posts`) }}>
            <List.Item.Meta
              avatar={<Avatar icon={<UserIcon />} />}
              title={item.name}
              description={item.email}
            />
          </List.Item>
        )}
      />
      <Pagination className='pagination' current={userStore.page} total={userStore.total} onChange={onChange} showSizeChanger={false} />
    </>
  );
});

export default Users;