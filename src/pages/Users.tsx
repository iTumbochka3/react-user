import React, { useState, useEffect } from 'react';
import { List, Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from "../use-stores";

const Users: React.FC = observer(() => {
  const [page, setPage] = useState(1);
  const { userStore } = useStores();
  useEffect(() => { userStore.updateUsersFromServer(page) }, [page]);

  const onChange: PaginationProps['onChange'] = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <>
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
      <Pagination current={page} total={+userStore.total} onChange={onChange} showSizeChanger={false} />
    </>
  );
});

export default Users;