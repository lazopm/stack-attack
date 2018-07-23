import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';

const Footer = () => (
    <div className={css(ss.Container)}>
        {'built by '}
        <a className={css(ss.Link)} href="http://lazopm.com">
            Pablo Lazo
        </a>
    </div>
);

export default Footer;
