import { queryString, randomItem } from 'utils';
import {
    filterUnusedQuestions,
    getViableQuestionIds,
    getAnswerSet,
} from './functions';
import {
    OUT_OF_QUESTIONS_ERROR,
    FETCH_ERROR,
} from './errors';

const API_KEY = '*M4waxPwy7Pjf3RYvnoAgw((';
const BASE_URL = 'https://api.stackexchange.com/2.2';
const QUESTIONS_URL = `${BASE_URL}/questions`;

const QUESTIONS_PARAMS = {
    site: 'stackoverflow',
    sort: 'votes',
    order: 'desc',
    filter: '!)5IW-5QuertwCfyRNgMq20xNXdEN',
    pagesize: 100,
    key: API_KEY,
    tagged: 'javascript',
};

const FULL_QUESTION_PARAMS = {
    site: 'stackoverflow',
    sort: 'activity',
    order: 'desc',
    filter: `!.Iwe-B09iLj5*28HiD3kSdxODduDe`,
    key: API_KEY,
};

//fetches a list of top voted questions
//used minimal filter for speed
const fetchQuestions = async page => {
    const query = queryString({
        ...QUESTIONS_PARAMS,
        page,
    });
    const res = await fetch(`${QUESTIONS_URL}?${query}`);
    if (res.ok) {
        const { items, has_more } = await res.json();
        if (items.length) {
            return {
                questions: items,
                has_more,
            };
        }
        throw FETCH_ERROR;
    }
    throw FETCH_ERROR;
};

//fetches a full question and its answers
const fetchFullQuestion = async id => {
    const query = queryString(FULL_QUESTION_PARAMS);
    const res = await fetch(`${QUESTIONS_URL}/${id}?${query}`);
    if (res.ok) {
        const { items } = await res.json();
        if (items.length) {
            return items[0];
        }
        throw FETCH_ERROR;
    }
    throw FETCH_ERROR;
};

let viableQuestionIds = [];
let nextPage = 1;
const getUnusedQuestionId = async usedIds => {
    let unusedViableIds = filterUnusedQuestions(
        viableQuestionIds,
        usedIds,
    );
    //keep fetching new pages until we have unused viable ids
    while(unusedViableIds.length < 1) {
        if (nextPage) {
            const { questions, has_more } = await fetchQuestions(nextPage);
            nextPage = has_more ? nextPage + 1 : false;
            viableQuestionIds = [
                ...viableQuestionIds,
                ...getViableQuestionIds(questions),
            ];
            unusedViableIds = filterUnusedQuestions(
                viableQuestionIds,
                usedIds,
            );
        }
        else {
            throw OUT_OF_QUESTIONS_ERROR;
        }
    }
    //pick a random unused viable question
    return randomItem(unusedViableIds);
}

export const getQuestion = async usedIds => {
    const id = await getUnusedQuestionId(usedIds);
    const {
        title, body,
        answers,
    } = await fetchFullQuestion(id);
    return {
        question: {
            id,
            title,
            body,
        },
        answers: getAnswerSet(answers),
    };
};
