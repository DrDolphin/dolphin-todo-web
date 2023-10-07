import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

interface MainContentheaderProps {
    title: string;
}

const MainContentHeader: React.FC<MainContentheaderProps> = ({ title }) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '24px', margin: '0 16px' }}>{title}</h1>
        </Header>
    )
}

export default MainContentHeader;