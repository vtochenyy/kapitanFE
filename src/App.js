import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from './pages/login/Login';
import './App.css';
import MainPage from './pages/main/Main';
import HeaderComponent from './components/header/Header';
import { Content, Footer, Header } from 'antd/es/layout/layout';

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        sessionStorage.getItem('isAuth') !== 'true' && navigate('/');
    }, [navigate]);

    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: '10vh',
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: 'green',
    };
    const contentStyle = {
        textAlign: 'center',
        height: location.pathname === '/' ? '' : '80vh',
        width: '100%',
        color: 'black',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'green',
        height: '10vh',
    };

    return (
        <div className="App">
            <Layout>
                {location.pathname !== '/' && (
                    <Header style={headerStyle}>
                        <HeaderComponent />
                    </Header>
                )}
                <Content style={contentStyle}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <Login />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <MainPage />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/news"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <div>news</div>
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/contacts"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <div>contacts</div>
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/mentions"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <div>mentions</div>
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/photoalbum"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <div>photoalbum</div>
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/teachers"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <div>teachers</div>
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/conditions"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <div>conditions</div>
                                </React.Suspense>
                            }
                        />

                        <Route
                            path="*"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <div>404</div>
                                </React.Suspense>
                            }
                        />
                    </Routes>
                </Content>
                {location.pathname !== '/' && <Footer style={footerStyle}>Footer</Footer>}
            </Layout>
        </div>
    );
}

export default App;
