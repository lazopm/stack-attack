import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';

const Header = () =>
    <div className={css(ss.Container)}>
        <h1 className={css(ss.Heading)}>
            stack<strong>attack</strong>
        </h1>
    </div>;

export default Header;
