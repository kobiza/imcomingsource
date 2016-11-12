'use strict';

import _ from 'lodash';
import Immutable from 'immutable';

import {SET_PERSON_STATUS} from '../actions/actionTypes';

const STATUSES = {
  WAITING_FOR_REPLY: 'WAITING_FOR_REPLY',
  COMING: 'COMING',
  NOT_COMING: 'NOT_COMING',
  NOT_SURE: 'NOT_SURE',
};

const initialState = [
  {id: '1', name: 'Binman', status: STATUSES.WAITING_FOR_REPLY},
  {id: '2', name: 'Eli', status: STATUSES.WAITING_FOR_REPLY},
  {id: '3', name: 'Eilan', status: STATUSES.WAITING_FOR_REPLY},
  {id: '4', name: 'Kobi', status: STATUSES.WAITING_FOR_REPLY},
  {id: '5', name: 'Tal', status: STATUSES.WAITING_FOR_REPLY}
];

export default function nextEventPersonsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_PERSON_STATUS:
            var index = _.findIndex(state, {id: action.personId});
            console.log('index: ', action.personId, index)
            var updatedPerson = _.assign({}, state[index], {status: action.status});
            return state
              .slice(0, index)
              .concat(updatedPerson)
              .concat(state.slice(index + 1));
        default:
            return state;
    }
}
