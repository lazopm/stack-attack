import React from 'react';
import { shuffle } from 'lodash/fp';

const styles = {
    maxHeight: 200,
    overflowY: 'scroll',
};
const LETTERS = ['A', 'B', 'C', 'D'];
const Answer = ({ body, letter }) =>
    <div>
        {letter}
        <div 
            style={styles}
            dangerouslySetInnerHTML={{__html: body}}
        />
    </div>

const Answers = ({ answers }) => {
    const shuffled = shuffle(answers);
    return (
        <div>
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
