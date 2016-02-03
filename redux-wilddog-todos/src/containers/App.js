import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo} from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    const { dispatch ,todos} = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        <TodoList
          todos={todos}
          remove={key =>
            dispatch(removeTodo(key))
          } />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }))
}

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);