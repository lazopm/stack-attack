import { queryString } from 'utils';

const BASE_URL = 'https://api.stackexchange.com/2.2';
const QUESTIONS_URL = `${BASE_URL}/questions`;
const QUESTIONS_PARAMS = {
    order: 'desc',
    pagesize: 100,
    sort: 'votes',
    site: 'stackoverflow',
    filter: '!L_Zm1pV5xZx.InOYB-OpIpbbbbbb',
}

const fetchQuestions = async page => {
    const params = {
        ...QUESTIONS_PARAMS,
        page,
    };
    const res = await fetch(`${QUESTIONS_URL}&${queryString(params)}`);
    const { items } = await res.json();
    return items; 
};

export const getQuestion = async tag => {
    return await fetchQuestions(1);
};
