/**
*
* CardWrapper
*
*/

import Card from 'antd/lib/card';
import styled from 'styled-components';

import variables from '../../css/variables';

const color = `${variables.black}`;
const fontSize = `${variables.fs6}`;
const bodyFontSize = `${variables.fs3}`;
const commentsCardHeaderFontSize = `${variables.fs4}`;

const CardWrapper = styled(Card)`
  border: 0 !important;

  &.ant-card:not(.ant-card-no-hovering):hover {
    box-shadow: none !important;
  }

  .ant-card-extra {
    top: 10px !important;
  }

  .ant-card-head {
    height: auto;
    display: flex;
    align-items: center;
    padding: 0;
    border-bottom: 0;

    .ant-card-head-title {
      font-size: ${fontSize};
    }
  }

  .ant-card-body {
    color: ${color};
    padding: 0;

    .card-body {
      font-size: ${bodyFontSize};
    }
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
