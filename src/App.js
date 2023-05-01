import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/login/Login';
import './App.css';
import MainPage from './pages/main/Main';

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem('isAuth') === 'true') navigate('/main');
    }, []);

    return (
        <div className="App">
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
                    path="/main"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <MainPage />
                        </React.Suspense>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
