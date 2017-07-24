import React from 'react';
import { shuffle } from 'lodash/fp';
import { css } from 'aphrodite';

import ss from './styles';

const LETTERS = ['A', 'B', 'C', 'D'];

const Answer = ({ body, letter }) =>
    <div className={css(ss.AnswerContainer)}>
        <div className={css(ss.LetterContainer)}>
            <div className={css(ss.Letter)}>
                {letter}
            </div>
        </div>
        <div className={css(ss.BodyContainer)}>
            <div 
                className={css(ss.Body)}
                dangerouslySetInnerHTML={{__html: body}}
            />
        </div>
    </div>;

const Answers = ({ answers }) => {
    const shuffled = shuffle(answers);
    return (
        <div className={css(ss.Container)}>
            {shuffled.map(({ id, ...props }, i) =>
                <Answer
                    key={id}
                    letter={LETTERS[i]}
                    {...props}
                />
            )}
        </div>
    );
}

export default Answers;
