import React from 'react';
import IconButton from '../Helper/IconButton';

const debug = require('../../utils/Debug')('ToolBox');

const style = {
  width: '100%',
  height: '55%',
};

const buttonContainerStyle = {
  marginTop: '14px',
  marginLeft: '10px',
  display: 'inline-block',
};

export default class ToolBox extends React.Component {
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
        className="ToolBox"
        style={style}
      >
        <div style={{ display: 'inline' }} >
          <div style={ buttonContainerStyle } >
            <IconButton iconName="fast-backward" />
          </div>
          <div style={ buttonContainerStyle } >
            <IconButton iconName="play" />
          </div>
          <div style={ buttonContainerStyle } >
            <IconButton iconName="stop" />
          </div>
          <div style={ buttonContainerStyle } >
            <IconButton iconName="fast-forward" />
          </div>
        </div>
      </div>
    );
  }
}
