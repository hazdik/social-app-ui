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
const bodyBackgroundColor = `${variables.grey}`;
const readMoreFontSize = `${variables.fs2}`;
const readMoreFontWeight = `${variables.fw3}`;
const cardShadowColor = `${variables.greyDark}`;
const cardBackgroundColor = `${variables.white}`;
const cardAuthorFontWeight = `${variables.fw3}`;
const cardFontColor = `${variables.black}`;
const cardMetaTimeColor = `${variables.greyDark}`;
const labelFontWeight = `${variables.fw2}`;

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
    background-color: ${bodyBackgroundColor};
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

  label {
    font-weight: ${labelFontWeight};
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

  .read-more {
    font-size: ${readMoreFontSize};
    font-weight: ${readMoreFontWeight};
    margin-top: 10px;
  }

  .card {
    background-color: ${cardBackgroundColor};
    border-radius: 2px !important;
    box-shadow: 3px 2px 15px -5px ${cardShadowColor};
    padding: 30px;

    &.ant-card {
      font-size: ${bodyFontSize};
    }

    .feed-card__meta {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      .meta__author-name {
        margin-left: 10px;
        font-weight: ${cardAuthorFontWeight};
        color: ${cardFontColor};
      }

      .meta__avatar {
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 2px;
        }
      }

      .meta__time {
        color: ${cardMetaTimeColor};

        &:before {
          content: "·";
          margin: 0 5px;
        }
      }
    }
  }

  .u-right {
    display: flex;
    margin-left: auto;
  }

  .u- {
    &mb-20 {
      margin-bottom: 20px;
    }

    &mb-30 {
      margin-bottom: 30px;
    }
  }

`;
