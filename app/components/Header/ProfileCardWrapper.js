/**
*
* ProfileCardWrapper
*
*/

import styled from 'styled-components';
import { lighten, darken } from 'polished';

import variables from '../../global-css/variables';

const borderColor = lighten(0.05, `${variables.brandColor2}`);
const backgroundColor = darken(0.05, `${variables.brandColor2}`);
const color = `${variables.greyLight}`;
const shadowColor = `${variables.greyDark}`;
const hoverbackgroundColor = lighten(0.05, `${variables.brandColor2}`);
const fontSize = `${variables.fs3}`;

const ProfileCardWrapper = styled.div`
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  width: 200px;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px ${shadowColor};

  .profile-card__item {
    &:not(:last-child) {
      border-bottom: 1px solid ${borderColor};
    }

    .item__link {
      padding: 15px 10px;
      display: flex;
      align-items: center;
      color: ${color};
      font-size: ${fontSize};

      &:hover {
        background-color: ${hoverbackgroundColor};
      }

      .anticon {
        margin-right: 10px;
      }
    }
  }
`;

export default ProfileCardWrapper;
