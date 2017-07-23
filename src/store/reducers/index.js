import { combineReducers } from 'redux'
import question from './question'
import answers from './answers'
import busy from './answers'

export default combineReducers({
    question,
    answers,
    busy,
});
