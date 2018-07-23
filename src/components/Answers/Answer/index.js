import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';

const Answer = ({ body, letter, correct, clickHandler }) => (
    <div
        className={css(
            ss.Container,
            correct && ss.Correct,
            clickHandler && ss.Hover,
        )}
        onClick={clickHandler}
    >
        <div className={css(ss.LetterContainer)}>
            <div className={css(ss.Letter)}>{letter}</div>
        </div>
        <div className={css(ss.BodyContainer)}>
            <div
                className={css(ss.Body)}
                dangerouslySetInnerHTML={{ __html: body }}
            />
        </div>
    </div>
);

export default Answer;
