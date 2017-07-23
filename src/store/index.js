import { createStore } from 'redux';
import reducers from './reducers';

const create = (state = {}) => createStore(reducers, state);

export { create as createStore };
