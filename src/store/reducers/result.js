import { ANSWERED, FETCH_QUESTION_SUCCESS } from 'store/actions';

export default (state = null, { type, ...action }) => {
    switch (type) {
        case FETCH_QUESTION_SUCCESS:
            return null;
        case ANSWERED:
            return {
                ...action,
            };
        default:
            return state;
    }
};
