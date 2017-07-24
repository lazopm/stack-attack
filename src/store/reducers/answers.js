import {
    FETCH_QUESTION_SUCCESS,
} from 'store/actions'; 

export default (state = [], { type, ...action }) => {
    switch (type) {
        case FETCH_QUESTION_SUCCESS:
            return action.answers.map(
                ({answer_id, body, is_accepted}) => ({
                    id: answer_id,
                    body,
                }));
        default:
            return state;
    }
};
