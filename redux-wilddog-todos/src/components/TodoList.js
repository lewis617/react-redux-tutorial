import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo key={index}
                todo={todo}
                remove={this.props.remove} />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  remove: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}