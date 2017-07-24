import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';

const Header = ({ score }) =>
    <div className={css(ss.Container)}>
        <h1 className={css(ss.Heading)}>
            stack<strong>attack</strong>
        </h1>
        <div className={css(ss.Score)}>
            {`score: ${score.join('/')}`}
        </div>
    </div>;

export default Header;
