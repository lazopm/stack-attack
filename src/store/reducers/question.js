import {
    FETCH_QUESTION,
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_ERROR,
} from 'store/actions'; 

export default (state = null, { type, ...action }) => {
    switch (type) {
        case FETCH_QUESTION:
            return null;
        case FETCH_QUESTION_SUCCESS:
            return action.question;
        case FETCH_QUESTION_ERROR:
            return null;
        default:
            return state;
    }
};
