import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Пользователи', '/users', <UserIcon />)
];

const MenuComponent: React.FC = () => {
  const navigate = useNavigate();
  const click: MenuProps['onClick'] = event => {
    navigate(`${event.key}`);
  };
  return (
    <Menu
      mode="inline"
      theme="dark"
      items={items}
      onClick={click}
    />
  );
}

export default MenuComponent;