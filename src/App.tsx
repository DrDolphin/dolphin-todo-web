import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Content from './components/Content/Content'

function App() {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <NavBar />
                <Layout>
                    <Content />
                    <Footer style={{ textAlign: 'center' }}>Created by DoctorDolphin</Footer>
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
