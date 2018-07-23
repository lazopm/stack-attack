import {
    FETCH_QUESTION,
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_ERROR,
} from 'store/actions';

export default (state = false, { type, ...action }) => {
    switch (type) {
        case FETCH_QUESTION:
            return true;
        case FETCH_QUESTION_SUCCESS:
            return false;
        case FETCH_QUESTION_ERROR:
            return false;
        default:
            return state;
    }
};
