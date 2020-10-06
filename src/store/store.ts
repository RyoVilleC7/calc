import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Reducer } from './reducer';

/////////////////////////////////////////////////////////////////

//logger設定
const logger = createLogger({
    collapsed: true,
    diff: true
});


//ストア生成
const store = createStore(
    combineReducers({
        Reducer
    }),
    applyMiddleware(logger)
);

export default store;
export type AppState = ReturnType<typeof store.getState>;