import React from 'react';
import { Icon } from 'react-fa';

const debug = require('../../utils/Debug')('Header');

const style = {
  marginTop: '5px',
  height: '1.1em',
  width: '3.2em',
  float: 'right',
};

const iconStyle = {
  textAlign: 'right',
  marginRight: '5px',
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // deafult state
    };
  }

  onToggleHoldTop = event => {
    debug('onToggleHoldTop %o', event);
  }

  render() {
    debug('render');
    return (
      <div
        className="Header"
        style={style}
      >
        <Icon
          name="thumb-tack"
          className="SelectableMenu"
          style={iconStyle}
          onClick={this.onToggleHoldTop}
        />
        <Icon
          name="minus"
          className="SelectableMenu"
          style={iconStyle}
        />
        <Icon
          name="times"
          className="SelectableMenu"
          style={iconStyle}
        />
      </div>
    );
  }
}
