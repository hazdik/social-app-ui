/**
*
* Wrapper
*
*/

import styled from 'styled-components';

import variables from '../../css/variables';

const bodyFontSize = `${variables.fs3}`;
const cardShadowColor = `${variables.greyDark}`;
const cardBackgroundColor = `${variables.white}`;
const cardAuthorFontWeight = `${variables.fw3}`;
const cardFontColor = `${variables.black}`;
const cardMetaTimeColor = `${variables.greyDark}`;

const Wrapper = styled.div`
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
`;

export default Wrapper;
