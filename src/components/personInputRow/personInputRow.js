'use strict';

require('./personInputRow.scss');

import React from 'react';
import template from './personInputRow.rt';

const STATUSES = {
  WAITING_FOR_REPLY: 'WAITING_FOR_REPLY',
  COMING: 'COMING',
  NOT_COMING: 'NOT_COMING',
  NOT_SURE: 'NOT_SURE',
};

module.exports = React.createClass({
    displayName: 'PersonInputRow',
    propTypes: {
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      status: React.PropTypes.string.isRequired,
      updateStatus: React.PropTypes.func.isRequired
    },
    imComing: function(id){
      this.props.updateStatus(this.props.id, STATUSES.COMING);
    },
    imNotComing: function(id){
      this.props.updateStatus(this.props.id, STATUSES.NOT_COMING);
    },
    imNotSure: function(id){
      this.props.updateStatus(this.props.id, STATUSES.NOT_SURE);
    },
    render: template
});
