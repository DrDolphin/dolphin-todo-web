import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

interface MainContentheaderProps {
    title: string;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const MainContentHeader: React.FC<MainContentheaderProps> = ({ title, collapsed, setCollapsed }) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <Header style={{ display: 'flex', padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
            <h1 style={{ fontWeight: 'bold', fontSize: '24px', margin: '0 16px' }}>{title}</h1>
        </Header>
    )
}

export default MainContentHeader;