import React, { findDOMNode, Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Input extends Component {
  render() {
    return (
      <div>
        <input type='text' value={this.props.propsValue} readOnly/>
      </div>
    );
  }
}
