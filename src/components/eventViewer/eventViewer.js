'use strict';

require('./eventViewer.scss');

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import template from './eventViewer.rt';
import {setPersonStatus} from '../../actions/actionCreators';

const STATUSES = {
  WAITING_FOR_REPLY: 'WAITING_FOR_REPLY',
  COMING: 'COMING',
  NOT_COMING: 'NOT_COMING',
  NOT_SURE: 'NOT_SURE',
};

const mapStateToProps = (state) => {
    return {
        nextEventPersons: state.nextEventPersons
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPersonStatus: (personId, status) => dispatch(setPersonStatus(personId, status)),
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(React.createClass({
    displayName: 'EventViewer',
    updateStatus: function(id, status){
      this.props.setPersonStatus(id, status);
    },
    getNotReplied: function(){
      return _.filter(this.props.nextEventPersons, {status: STATUSES.WAITING_FOR_REPLY});
    },
    getComing: function(){
      return _.filter(this.props.nextEventPersons, {status: STATUSES.COMING});
    },
    getNotComing: function(){
      return _.filter(this.props.nextEventPersons, {status: STATUSES.NOT_COMING});
    },
    getNotSure: function(){
      return _.filter(this.props.nextEventPersons, {status: STATUSES.NOT_SURE});
    },
    render: template
}));
