/**
*
* ProfileCardWrapper
*
*/

import styled from 'styled-components';

import variables from '../../css/Variables';

const borderColor = `${variables.grey}`;
const backgroundColor = `${variables.white}`;
const color = `${variables.black}`;
const shadowColor = `${variables.greyDark}`;
const hoverbackgroundColor = `${variables.grey}`;
const fontSize = `${variables.fs2}`;

const ProfileCardWrapper = styled.div`
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  width: 200px;
  border-radius: 2px;
  box-shadow: 1px 1px 15px -5px ${shadowColor};

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
