import React, { useEffect } from 'react';
import { List } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from "../use-stores";

const Users: React.FC = observer(() => {
  const { userStore } = useStores();
  useEffect(() => { userStore.updateUsersFromServer() }, []);
  return (
    <List
      dataSource={userStore.users}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            description={item.email}
          />
        </List.Item>
      )}
    />
  );
});

export default Users;