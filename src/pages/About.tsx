import React from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

const About: React.FC = () => {
    return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                About Page
            </Content>
        </Layout>
    );
}

export default About;