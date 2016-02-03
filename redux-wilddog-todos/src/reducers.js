import { combineReducers } from 'redux'
import { ADD_TODO_OK, REMOVE_TODO_OK ,GET_TODO_OK} from './actions'

function todos(state=[], action) {
  switch (action.type) {
    case GET_TODO_OK:
      return action.payload
    case ADD_TODO_OK:
      return [
        ...state,
        action.payload
      ]
    case REMOVE_TODO_OK:
      return state.filter((todo)=>todo.key!==action.payload
      )
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp