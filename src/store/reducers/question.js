export default (state = null, { type, ...action }) => {
    switch (type) {
        case 'NEW_QUESTION':
            return action.question;
        default:
            return state;
    }
};
