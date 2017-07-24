import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';

const Result = ({ correct, retry }) =>
    <div className={css(
        ss.Container,
        correct && ss.Correct,
    )}>
        <div className={css(
            ss.Result,
            correct && ss.CorrectResult,
        )}>
            {correct ? 'CORRECT' : 'WRONG'}
        </div>
        <button
            className={css(ss.Button)}
            onClick={retry}
        >
            {`${correct ? 'PLAY' : 'TRY'} AGAIN`}
        </button>
    </div>;

export default Result;
