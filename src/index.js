import ReactDOM from 'react-dom';
import React from 'react';
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);
registerServiceWorker();
