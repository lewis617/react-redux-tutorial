import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';


function mapStateToProps(state) {
  return {
    propsValue: state.value
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(Input);