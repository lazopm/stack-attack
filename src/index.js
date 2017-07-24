import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { createStore } from './store';

//load usedIds from storage so people don't get the same questions
const storedIds = window.localStorage.getItem('used-ids');
const initialState = {
    usedIds: storedIds ? storedIds.split(',') : [],
};
const store = createStore(initialState);
console.log(initialState);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
