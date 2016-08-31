import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';
import createDebounce from 'redux-debounced';

import quickpickApp from './reducers/root';

const loggerMiddleware = createLogger();
const debounceMiddleware = createDebounce();

const persistentStore = compose(
  persistState(['tierlist', 'locale', 'selectedHero']),
  applyMiddleware(
    debounceMiddleware
    , thunkMiddleware
    , loggerMiddleware
  )
)(createStore);

const store = persistentStore(quickpickApp);
export default store;
