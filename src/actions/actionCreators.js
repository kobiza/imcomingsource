'use strict';

import * as actionTypes from './actionTypes';

export const setCurrentUser = (userName) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        userName
    };
};

export const setPersonStatus = (personId, status) => {
    return {
        type: actionTypes.SET_PERSON_STATUS,
        personId,
        status
    };
};
