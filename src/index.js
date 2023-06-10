import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AxiosInterceptors from './axios';
import { ConfigProvider } from 'antd';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: 'green',
                            colorError: 'red',
                            colorInfo: 'cyan',
                            colorSuccess: 'green',
                            colorWarning: 'yellow',
                        },
                    }}
                >
                    <App />
                </ConfigProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

AxiosInterceptors();
