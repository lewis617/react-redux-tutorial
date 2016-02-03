import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.todo.text}
        <button onClick={this.props.remove.bind(this,this.props.todo.key)}>remove</button>
      </li>
    );
  }
}

Todo.propTypes = {
  remove: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};