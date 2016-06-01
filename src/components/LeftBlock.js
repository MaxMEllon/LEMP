import React from 'react';
import { Icon } from 'react-fa';

const debug = require('../utils/Debug')('LeftBlock');

const style = {
  backgroundColor: 'rgb(47, 200, 216)',
  height: '100%',
  width: '30%',
  display: 'inline-block',
};

const marginLeft = '5px';

const titleStyle = {
  fontSize: '34px',
  marginLeft,
  color: 'rgb(255, 255, 255)',
};

const menuStyle = {
  fontSize: '12px',
  marginLeft,
};

export default class LeftBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // deafult state
    };
  }

  render() {
    debug('render');
    return (
      <div
        className="LeftBlock"
        style={style}
      >
        <p style={titleStyle} >LEMP</p>
        <p className="SelectableMenu" style={menuStyle} >options</p>
        <p className="SelectableMenu" style={menuStyle} >utilities</p>
        <p className="SelectableMenu" style={menuStyle} >equlizer</p>
        <p className="SelectableMenu" style={menuStyle} >playlist</p>
        <Icon
          className="Detail"
          name="ellipsis-h"
          size="2x"
        />
      </div>
    );
  }
}
