import { ANSWERED } from 'store/actions';

export default (state = [0, 0], { type, ...action }) => {
    const [correct, answered] = state;
    switch (type) {
        case ANSWERED:
            return [
                action.correct === action.chosen ? correct + 1 : correct,
                answered + 1,
            ];
        default:
            return state;
    }
};
