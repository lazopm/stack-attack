import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';

const Question = ({
    title,
    body,
}) =>
    <div className={css(ss.Container)}>
        <div className={css(ss.Content)}>
            <h2
                className={css(ss.Heading)}
                dangerouslySetInnerHTML={{__html: title}}
            />
            <div
                className={css(ss.Body)}
                dangerouslySetInnerHTML={{__html: body}}
            />
        </div>
    </div>;

export default Question;
