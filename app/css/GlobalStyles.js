import { injectGlobal } from 'styled-components';

// ant design styles
import 'antd/lib/layout/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/spin/style/css';
import 'antd/lib/alert/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/auto-complete/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/dropdown/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/upload/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/tooltip/style/css';

import variables from './Variables';

const bodyFontSize = `${variables.fs3}`;

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    overflow-y: scroll;
    font-size: ${bodyFontSize};
  }

  .app {
    display: flex;
    height: 100vh;
  }

  p,
  label {
    font-size: ${bodyFontSize};
    line-height: 1.5em;
    display: inline-flex;
    margin-bottom: 5px;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 2px;
  }

  button {
    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: 0;
    }
  }
`;
