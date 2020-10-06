import store from '../store/store';

/////////////////////////////////////////////////////////////////

export const operatorDir = (): object => {
    return store.getState().Reducer.operatorState ? {
        type: 'FALSE_OPERATOR'
    } : {
        type: 'TRUE_OPERATOR'
    }
};