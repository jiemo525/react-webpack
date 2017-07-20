import ReactDOM from 'react-dom';
import React from 'react';
import Routes from './routes/index';
import './utils/index.scss';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
