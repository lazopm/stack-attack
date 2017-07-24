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
    key: '*M4waxPwy7Pjf3RYvnoAgw((',
};

//fetches a list of 100 top voted questions
const fetchQuestions = async page => {
    const query = queryString({
        ...QUESTIONS_PARAMS,
        page,
    });
    const res = await fetch(`${QUESTIONS_URL}?${query}`);
    if (res.ok) {
        const { items } = await res.json();
        if (items.length) {
            return items; 
        }
        else {
            throw new Error('ERROR!LEN');
        }
    }
    else {
        throw new Error('ERROR!');
    }
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
    id => !usedIds.includes(id),
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
    while(unusedViableIds.length < 1) {
        const newQuestions = await fetchQuestions(page);
        const newViableQuestionIds = getViableQuestionIds(newQuestions);
        page++;
        viableQuestionIds = [
            ...viableQuestionIds,
            ...newViableQuestionIds,
        ];
        unusedViableIds = filterUnusedQuestions(
            viableQuestionIds,
            usedQuestionIds,
        );
    }
    //pick a random unused viable question
    const id = randomItem(unusedViableIds);
    console.log('picked', id);
    return Promise.resolve(id);
};
