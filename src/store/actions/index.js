import { getQuestion } from 'api/stackoverflow';

export const FETCH_QUESTION = 'FETCH_QUESTION';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';

export const newQuestion = () =>
    async (dispatch, getState) => {
        const { usedIds } = getState();
        dispatch({
            type: FETCH_QUESTION,
        });
        try {
            const question = await getQuestion(usedIds);
            dispatch({
                type: FETCH_QUESTION_SUCCESS,
                ...question,
            });
        }
        catch(error) {
            console.log(error);
            dispatch({
                type: FETCH_QUESTION_ERROR,
                error,
            });
        }
    };

export const ANSWERED = 'ANSWERED';

export const chooseAnswer = id =>
    (dispatch, getState) => {
        const { question, usedIds } = getState();
        dispatch({
            type: ANSWERED, 
            questionId: question.id,  
            chosen: id,
            correct: question.acceptedAnswerId,
        });
        //store usedIds
        window.localStorage.setItem(
            'used-ids',
            [...usedIds, question.id]
        );
    };
