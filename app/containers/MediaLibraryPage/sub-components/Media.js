import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';
import isEmpty from 'utils/IsEmpty';

export default class Media extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onClick: PropTypes.func,
    media: PropTypes.object,
  };

  constructor() {
    super();

    this.state = {
      isLoading: true,
    };

    this.handleLoading = this.handleLoading.bind(this);
  }

  handleLoading() {
    this.setState({
      isLoading: false,
    });
  }

  imageNode() {
    return (
      <img
        src={this.props.media.url}
        role="presentation"
        style={{ minHeight: 180 }}
      />
    );
  }

  virtualImageNode() {
    return (
      <span>
        <img
          key={1}
          src={this.props.media.url}
          role="presentation"
          onLoad={this.handleLoading}
          style={{ display: 'none' }}
        />
        { this.state.isLoading ? this.loadingNode() : this.imageNode() }
      </span>
    );
  }

  loadingNode() {
    return <Loader />;
  }

  render() {
    if (isEmpty(this.props.media)) return false;

    return (
      <button
        onClick={this.props.onClick}
        style={{
          marginBottom: 24,
          padding: '0 12px',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        { this.virtualImageNode() }
      </button>
    );
  }
}
