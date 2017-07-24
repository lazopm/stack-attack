import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

const create = (initialState = {}) =>
    createStore(
        reducers,
        initialState,
        applyMiddleware(thunk),
    );

export { create as createStore };
