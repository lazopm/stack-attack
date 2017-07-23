import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

const create = (initialState = {}) =>
    createStore(
        reducers,
        applyMiddleware(thunk),
        initialState,
    );

export { create as createStore };
