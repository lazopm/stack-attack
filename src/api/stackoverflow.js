import { queryString, randomItem } from 'utils';
import { compose, map, get, filter } from 'lodash/fp';

const BASE_URL = 'https://api.stackexchange.com/2.2';
const QUESTIONS_URL = `${BASE_URL}/questions`;
const QUESTIONS_PARAMS = {
    order: 'desc',
    pagesize: 100,
    sort: 'votes',
    site: 'stackoverflow',
    filter: '!)5IW-5QuertwCfyRNgMq20xNXdEN',
};

//fetches a list of 100 top voted questions
const fetchQuestions = async page => {
    const params = {
        ...QUESTIONS_PARAMS,
        page,
    };
    const res = await fetch(`${QUESTIONS_URL}?${queryString(params)}`);
    const { items } = await res.json();
    return items; 
};


//filters out questions that don't have an accepted answer 
//or don't have enough answers to use as options
const filterViableQuestions = filter(q =>
    q.accepted_answer_id && q.answer_count > 3
);

//returns an array of viable question ids
const getViableQuestionIds = compose(
    map(get('question_id')),
    filterViableQuestions,
);

//filters out questions that have already been used
const filterUnusedQuestions = (ids, usedIds) => filter(
    id => usedIds.includes(id),
    ids,
);

let viableQuestionIds = [];
let page = 1;
export const getQuestion = async usedQuestionIds => {
    let unusedViableIds = filterUnusedQuestions(
        viableQuestionIds,
        usedQuestionIds,
    );
    //keep fetching new pages until we have unused viable ids
    while(!unusedViableIds.length) {
        const newQuestions = await fetchQuestions(page);
        page++;
        viableQuestionIds = [
            ...viableQuestionIds,
            getViableQuestionIds(newQuestions),
        ];
    }
    //pick a random unused viable question
    const id = randomItem(unusedViableIds);
};
