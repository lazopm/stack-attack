import {
    compose,
    map,
    get,
    filter,
} from 'lodash/fp';
import { randomIndices } from 'utils';

//filters out questions that don't have an accepted answer 
//or don't have enough answers to use as options
const viableQuestionFilter = filter(q =>
    q.accepted_answer_id && q.answer_count > 3
);

//returns an array of viable question ids
export const getViableQuestionIds = compose(
    map(get('question_id')),
    viableQuestionFilter,
);

//filters out questions that have already been used
export const filterUnusedQuestions = (ids, usedIds) => filter(
    id => !usedIds.includes(id),
    ids,
);

//returns a set of 4 answers that includes the accepted answer
export const getAnswerSet = answers => {
    const accepted = answers.find(a => a.is_accepted === true);
    answers.splice(answers.indexOf(accepted), 1);
    return [
        accepted,
        ...randomIndices(answers.length, 3).map(i => answers[i]),
    ]
};
