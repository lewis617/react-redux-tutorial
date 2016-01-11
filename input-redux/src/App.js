import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './actions'

class App extends Component {
  render() {
    return (
      <div>
        <input type='text' value={this.props.propsValue} onChange={this.changeHandle.bind(this)} ref="input"/>
        {this.props.propsValue}
      </div>
    );
  }
  changeHandle(){
    const node = ReactDOM.findDOMNode(this.refs.input);
    const value = node.value.trim();
    this.props.change(value);
  }
}

function mapStateToProps(state) {
  return {
    propsValue: state.value
  }
}

export default connect(mapStateToProps,action)(App);