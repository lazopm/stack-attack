import {
    FETCH_QUESTION_SUCCESS,
} from 'store/actions'; 

export default (state = null, { type, ...action }) => {
    switch (type) {
        case FETCH_QUESTION_SUCCESS:
            return { ...action.question };
        default:
            return state;
    }
};
