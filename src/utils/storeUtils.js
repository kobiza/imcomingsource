'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';

import currentUserReducer from '../reducers/currentUserReducer';

export const makeStore = initialState => {
    const reducers = combineReducers({
        currentUser: currentUserReducer
    });

    const middleware = applyMiddleware();

    return createStore(reducers, initialState, middleware);
};
