import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import MenuComponent from './components/MenuComponent';

const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='main-container'>
      <Sider>
        <MenuComponent />
      </Sider>
      <Content className='content'>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
