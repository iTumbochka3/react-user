import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import axios from 'axios';
import { IUser } from '../models/IUser';

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    axios.get<IUser[]>('https://gorest.co.in/public/v2/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
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
}

export default Users;