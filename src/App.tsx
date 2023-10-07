import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NavBar from './components/NavBar';
import { Col, Layout, Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import MainContentHeader from './components/MainContentHeader';

function App() {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <NavBar />
                <Layout>
                    <Routes>
                        <Route path="/" element={<MainContentHeader title='Home' />} />
                        <Route path="/about" element={<MainContentHeader title='About' />} />
                    </Routes>
                    <Layout>
                        <Row>
                            <Col span={18} push={6}>
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/about" element={<About />} />
                                </Routes>
                            </Col>
                            <Col span={6} pull={18}>
                                <h1>Test</h1>
                            </Col>
                        </Row>
                    </Layout>
                    <Footer style={{ textAlign: 'center' }}>Created by DoctorDolphin</Footer>
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
