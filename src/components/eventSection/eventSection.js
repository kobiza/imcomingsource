'use strict';

require('./eventSection.scss');

import React from 'react';
import template from './eventSection.rt';

module.exports = React.createClass({
    displayName: 'EventSection',
    getInitialState: function(){
      return {
        isOpen: false
      };
    },
    toggleSection: function(){
      this.setState({isOpen: !this.state.isOpen});
    },
    render: template
});
