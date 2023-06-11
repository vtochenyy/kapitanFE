import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from './pages/login/Login';
import './App.css';
import MainPage from './pages/main/Main';
import HeaderComponent from './components/header/Header';
import FooterComponent from './components/footer/Footer';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import News from './pages/news/News';
import NewItemPage from './pages/news/newItemPage/NewItemPage';
import Contacts from './pages/contacts/Contacts';
import Mentions from './pages/mentions/Mentions';
import MentionItemPage from './pages/mentions/mentionItemPage/MentionItemPage';
import Teachers from './pages/teachers/Teachers';
import Admin from './pages/admin/Admin';
import PhotoAlbum from './pages/photoalbum/PhotoAlbum';
import PhotoAlbumItemPage from './pages/photoalbum/photoAlbumItemPage/photoAlbumItemPage';

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
        backgroundColor: 'green',
    };
    const contentStyle = {
        textAlign: 'center',
        minHeight: '80vh',
        width: '100%',
        color: 'black',
        padding: '20px !important',
        overflowY: 'hidden',
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
                                    <News />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/news/:id"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <NewItemPage />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/contacts"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <Contacts />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/mentions"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <Mentions />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/mentions/:id"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <MentionItemPage />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/photoalbum"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <PhotoAlbum />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/photoalbum/:id"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <PhotoAlbumItemPage />
                                </React.Suspense>
                            }
                        />
                        <Route
                            path="/teachers"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <Teachers />
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
                            path="/admin"
                            element={
                                <React.Suspense fallback={<>...</>}>
                                    <Admin />
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
                {location.pathname !== '/' && (
                    <Footer style={footerStyle}>
                        <FooterComponent />
                    </Footer>
                )}
            </Layout>
        </div>
    );
}

export default App;
