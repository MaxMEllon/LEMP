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
      rotate: 0,
    };
  }

  onToggleHoldTop = event => {
    debug('onToggleHoldTop %o', event);
    const isHold = this.state.rotate === 0 ? 1 : 0;
    this.setState({ rotate: isHold * 90 });
  }

  render() {
    debug('render');
    return (
      <div
        className="Header"
        style={style}
      >
      {(() => {
        if (this.state.rotate === 0) {
          return (
            <Icon
              className="SelectableMenu"
              name="thumb-tack"
              style={iconStyle}
              onClick={this.onToggleHoldTop}
            />
          );
        } else {
          return (
            <Icon
              className="SelectableMenu"
              name="thumb-tack"
              rotate={`${this.state.rotate}`}
              style={iconStyle}
              onClick={this.onToggleHoldTop}
            />
          );
        }
      })()}
        <Icon
          className="SelectableMenu"
          name="minus"
          style={iconStyle}
        />
        <Icon
          className="SelectableMenu"
          name="times"
          style={iconStyle}
        />
      </div>
    );
  }
}
