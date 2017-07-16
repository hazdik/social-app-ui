/*
 *
 * Jumbotron
 *
 */

import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

export class Jumbotron extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row>
        <Col span={24}>
          <div className="jumbotron">
            <h1>Social Network</h1>
          </div>
        </Col>
      </Row>
    );
  }
}

Jumbotron.propTypes = {
};


export default Jumbotron;
