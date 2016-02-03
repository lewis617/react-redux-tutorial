import { applyMiddleware, createStore ,compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import reducers from './reducers';


export default (initialState) => {
  const store = compose(
      applyMiddleware(
          thunk,
          createLogger()
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(reducers, initialState);

  return store;
};