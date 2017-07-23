export default (state = [], { type, ...action }) => {
    switch (type) {
        case 'NEW_QUESTION':
            return action.answers;
        default:
            return state;
    }
};
