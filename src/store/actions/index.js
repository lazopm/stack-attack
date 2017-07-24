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
