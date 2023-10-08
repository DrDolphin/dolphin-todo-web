import React from 'react';
import { Button, Col, Layout, Row, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Routes, Route } from 'react-router-dom';
import HomeContent from '../HomeContent/HomeContent';
import MainContentHeader from '../MainContentHeader/MainContentHeader';
import TaskListDisplay from '../TaskListDisplay/TaskListDisplay';
import { MainContentController } from './MainContentController';

interface MainContentProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const MainContent: React.FC<MainContentProps> = ({collapsed, setCollapsed}) => {
    const {
        data,
        selectedTask,
        setSelectedTask,
        handleStatusChange,
        showSomePopup
    } = MainContentController(); 

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ flex: 1 }}>
            <Routes>
                <Route path="/" element={<MainContentHeader title='Home' collapsed={collapsed} setCollapsed={setCollapsed} />} />
                <Route path="/about" element={<MainContentHeader title='About' collapsed={collapsed} setCollapsed={setCollapsed} />} />
            </Routes>
            <Content style={{ margin: '12px 8px 0' }} >
                <Row gutter={[16, 16]} style={{ height: '100%' }}>
                    <Col span={5}>
                        <div 
                            style={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 12, 
                                minHeight: 360, 
                                height: '100%',
                                background: colorBgContainer
                            }}
                        >
                            <TaskListDisplay 
                                data={data} 
                                onStatusChange={handleStatusChange} 
                                selectedTask={selectedTask} 
                                setSelectedTask={setSelectedTask} 
                            />
                            <Button type="primary">New Task</Button>
                        </div>
                    </Col>
                    <Col span={19}>
                        <div 
                            style={{ 
                                padding: 12, 
                                minHeight: 360, 
                                height: '100%',
                                background: colorBgContainer 
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<HomeContent task={selectedTask} />} />
                            </Routes>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default MainContent;