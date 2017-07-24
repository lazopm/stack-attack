import {
    compose,
    map,
    get,
    filter,
    sortBy,
} from 'lodash/fp';

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

//returns a set of answers that includes the accepted answer
//and up to 3 other top scoring answers
export const getAnswerSet = answers => {
    const sorted = sortBy('score', answers);
    const accepted = sorted.find(a => a.is_accepted === true);
    sorted.splice(sorted.indexOf(accepted), 1);
    return [accepted, ...sorted.slice(0, 3)];
};
