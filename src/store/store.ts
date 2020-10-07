import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { Reducer } from './reducer';

/////////////////////////////////////////////////////////////////

//Redux dev tools
interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
declare var window: ExtendedWindow;
const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//logger
const logger = createLogger({
    collapsed: true,
    diff: true
});


//store
const store = createStore(
    combineReducers({
        Reducer
    }),
    composeReduxDevToolsEnhancers(applyMiddleware(logger))
);

export default store;
export type AppState = ReturnType<typeof store.getState>;