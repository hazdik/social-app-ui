/**
*
* Menu
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import { Link } from 'react-router';
import Icon from 'antd/lib/icon';

import messages from './messages';
import ProfileCardWrapper from './ProfileCardWrapper';

function ProfileCard() {
  return (
    <ProfileCardWrapper>
      <div className="profile-card__item">
        <Link
          to={'/'}
          activeClassName="active"
          className="item__link"
        >
          <Icon type="home" />
          Edit profile
        </Link>
      </div>
      <div className="profile-card__item">
        <Link
          to={'/'}
          activeClassName="active"
          className="item__link"
        >
          <Icon type="home" />
          Edit settings
        </Link>
      </div>
      <div className="profile-card__item">
        <Link
          to={'/'}
          activeClassName="active"
          className="item__link"
        >
          <Icon type="home" />
          About
        </Link>
      </div>
      <div className="profile-card__item">
        <Link
          to={'/'}
          activeClassName="active"
          className="item__link"
        >
          <Icon type="home" />
          Help
        </Link>
      </div>
      <div className="profile-card__item">
        <div className="item__link">
          <Button
            style={{ width: '100%' }}
            size="large"
            icon="logout"
            text={<FormattedMessage {...messages.signOut} />}
            onClick={
              () => {
                localStorage.removeItem('accessToken');
                window.location.reload();
              }
            }
          />
        </div>
      </div>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;
