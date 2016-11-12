'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';

import currentUserReducer from '../reducers/currentUserReducer';
import nextEventPersonsReducer from '../reducers/nextEventPersonsReducer';


export const makeStore = initialState => {
    const reducers = combineReducers({
        currentUser: currentUserReducer,
        nextEventPersons: nextEventPersonsReducer
    });

    const middleware = applyMiddleware();

    return createStore(reducers, initialState, middleware);
};
