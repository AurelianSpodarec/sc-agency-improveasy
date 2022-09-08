import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store';
import App from './App';

import 'lib/src/_styles/generic.scss';
import './_styles/main.scss';

import { initApi } from 'lib/src/utils/api';

import config from './config';

import ErrorBoundary from 'lib/src/pages/error/ErrorBoundary';
import ModalProvider from './context/modalContext';

const { API_URL } = config;

initApi(API_URL);

const container = document.getElementById('root');
const root = createRoot(container!); // eslint-disable-line

root.render(
    <ErrorBoundary>
        <Router>
            <Provider store={store}>
                <ModalProvider>
                    <App />
                </ModalProvider>
            </Provider>
        </Router>
    </ErrorBoundary>,
);
