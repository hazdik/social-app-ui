/**
*
* CardWrapper
*
*/

import Card from 'antd/lib/card';
import styled from 'styled-components';

import variables from '../../css/Variables';

const color = `${variables.black}`;
const headerHeight = '70px';
const shadowColor = `${variables.greyDark}`;
const fontSize = `${variables.fs7}`;
const bodyFontSize = `${variables.fs3}`;
const commentsCardHeaderFontSize = `${variables.fs4}`;

const CardWrapper = styled(Card)`
  border: 0 !important;
  border-radius: 2px !important;
  box-shadow: 2px 2px 15px -5px ${shadowColor};

  &:hover {
    box-shadow: 2px 2px 15px -5px ${shadowColor};
  }

  &.ant-card {
    font-size: ${bodyFontSize};
  }

  .ant-card-extra {
    top: 18px !important;
  }

  .ant-card-head {
    height: auto;
    display: flex;
    align-items: center;
    min-height: ${headerHeight};
    padding: 0 30px;
    border-bottom: 0;

    .ant-card-head-title {
      font-size: ${fontSize};
    }
  }

  .ant-card-body {
    color: ${color};
    padding: 30px;
  }

  &.comments-card {
    .ant-card-head {
      .ant-card-head-title {
        font-size: ${commentsCardHeaderFontSize};
      }
    }
  }
`;

export default CardWrapper;
