import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

export default function counter (state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      // State mutations are bad, in dev mode, we detect them and throw an error.
      // Try it out by uncommenting the line below and running `npm run dev`!
      // state.mutation = true
      return { ...state, count: state.count + 1 }
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
