import { combineReducers } from 'redux'
import question from './question'
import answers from './answers'

export default combineReducers({
    question,
    answers,
});
