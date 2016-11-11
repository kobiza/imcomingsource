'use strict';

import React from 'react';
import template from './appWrapper.rt';
import { makeStore } from '../../utils/storeUtils';

const store = makeStore();

module.exports = React.createClass({
    displayName: 'AppWrapper',
    getStore: function () {
        return store;
    },
    render: template
});
