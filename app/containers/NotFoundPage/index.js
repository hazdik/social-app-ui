/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import SidebarCombo from 'components/Layout/SidebarCombo';
import CardWrapper from 'components/Card';
import messages from './messages';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SidebarCombo>
        <div className="page">
          <Row>
            <Col
              className="row u-mb-20"
              span={24}
            >
              <div className="box">
                <CardWrapper>
                  <h3>
                    <FormattedMessage {...messages.header} />
                  </h3>
                </CardWrapper>
              </div>
            </Col>
          </Row>
        </div>
      </SidebarCombo>
    );
  }
}
