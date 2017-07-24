import { combineReducers } from 'redux'
import question from './question'
import answers from './answers'
import busy from './answers'
import usedIds from './usedIds'
import result from './result'

export default combineReducers({
    question,
    answers,
    busy,
    usedIds,
    result,
});
