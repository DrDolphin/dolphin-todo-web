import React from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Task } from '../../models/Task';

interface HomePageProps {
    task: Task | null
}

const HomePage: React.FC<HomePageProps> = ({task}) => {
    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                <p>Home Page of {task?.Title}</p>
                <p>{task?.Title} is {task?.Status ? 'True' : 'False'}</p>
            </Content>
        </Layout>
    );
}

export default HomePage;