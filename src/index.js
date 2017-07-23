import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { createStore } from './store';

ReactDOM.render(
    <App store={createStore()} />,
    document.getElementById('root')
);
