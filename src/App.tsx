import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Content from './components/Content/Content'
import { useState } from 'react';

function App() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
                <Layout>
                    <Content collapsed={collapsed} setCollapsed={setCollapsed} />
                    <Footer style={{ textAlign: 'center' }}>Created by DoctorDolphin</Footer>
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
