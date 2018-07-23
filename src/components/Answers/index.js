import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import Answer from './Answer';
import Result from './Result';

const LETTERS = ['A', 'B', 'C', 'D'];
const Answers = ({ answers, result, choiceHandler, retry }) => {
    return (
        <div className={css(ss.Container)}>
            {answers.map(({ id, ...props }, i) => {
                if (result && result.chosen === id) {
                    return (
                        <Result
                            key={id}
                            correct={result.chosen === result.correct}
                            retry={retry}
                        />
                    );
                }
                return (
                    <Answer
                        key={id}
                        letter={LETTERS[i]}
                        correct={result && result.correct === id}
                        clickHandler={!result && (() => choiceHandler(id))}
                        {...props}
                    />
                );
            })}
        </div>
    );
};

export default Answers;
