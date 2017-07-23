export const NEW_QUESTION = 'NEW_QUESTION';
export const newQuestion = (question, answers) => ({
    type: NEW_QUESTION,
    question,
    answers,
});
