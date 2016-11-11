'use strict';

require('./app.scss');

import React from 'react';
import { connect } from 'react-redux';
import template from './app.rt';

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    };
};

module.exports = connect(mapStateToProps)(React.createClass({
    displayName: 'App',
    render: template
}));
