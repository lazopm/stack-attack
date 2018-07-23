import { ANSWERED } from 'store/actions';
export default (state = [], { type, ...action }) =>
    type === ANSWERED ? [...state, action.questionId] : state;
