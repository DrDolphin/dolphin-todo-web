// components/NavBar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    HomeOutlined, 
    InfoCircleOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

type MenuItem = {
  key: string;
  label: React.ReactNode;
  icon: React.ReactNode;
  children?: MenuItem[];
};

const NavBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items: MenuItem[] = [
    { key: '1', label: <Link to="/">Home</Link>, icon: <HomeOutlined /> },
    { key: '9', label: <Link to="/about">About</Link>, icon: <InfoCircleOutlined /> }
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default NavBar;
