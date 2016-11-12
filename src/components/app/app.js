'use strict';

require('./app.scss');

import React from 'react';
import { connect } from 'react-redux';
import template from './app.rt';
import {setPersonStatus} from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        nextEventPersons: state.nextEventPersons
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPersonStatus: (personId, status) => dispatch(setPersonStatus(personId, status)),
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(React.createClass({
    displayName: 'App',
    updateStatus: function(id, status){
      this.props.setPersonStatus(id, status);
    },
    render: template
}));
