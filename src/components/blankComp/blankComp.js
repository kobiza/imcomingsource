'use strict';

require('./blankComp.scss');

import React from 'react';
import template from './blankComp.rt';

module.exports = React.createClass({
    displayName: 'BlankComp',
    render: template
});
