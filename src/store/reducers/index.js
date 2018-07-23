import { combineReducers } from 'redux';
import question from './question';
import answers from './answers';
import busy from './answers';
import usedIds from './usedIds';
import result from './result';
import score from './score';

export default combineReducers({
    question,
    answers,
    busy,
    usedIds,
    result,
    score,
});
