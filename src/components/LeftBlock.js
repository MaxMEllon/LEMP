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
  width: '50%',
  fontSize: '28px',
  color: 'rgb(255, 255, 255)',
  marginLeft,
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
        <p style={titleStyle} >LEMP3</p>
        <p className="SelectableMenu" style={menuStyle} >options</p>
        <p className="SelectableMenu" style={menuStyle} >utilities</p>
        <p className="SelectableMenu" style={menuStyle} >equlizer</p>
        <p className="SelectableMenu" style={menuStyle} >playlist</p>
        <div
          className="Detail"
          style={{
            padding: '10px 0',
            marginTop: '-30px',
            float: 'right',
            display: 'inline-block',
            cursor: 'pointer',
          }}
        >
          <Icon name="ellipsis-h" />
        </div>
      </div>
    );
  }
}
