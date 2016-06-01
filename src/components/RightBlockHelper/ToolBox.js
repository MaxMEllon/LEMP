import React from 'react';
import SubToolBox from './SubToolBox';
import IconButton from '../Helper/IconButton';

const debug = require('../../utils/Debug')('ToolBox');

const style = {
  width: '70%',
  height: '55%',
};

const buttonContainerStyle = {
  width: '60%',
  paddingTop: '8px',
  paddingLeft: '5px',
  display: 'table-cell'
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
        <div style={{ display: 'table' }} >
          <div style={ buttonContainerStyle } >
            <IconButton iconName="fast-backward" />
          </div>
          <div style={ buttonContainerStyle } >
            <IconButton iconName="stop" />
          </div>
          <div style={ buttonContainerStyle } >
            <IconButton iconName="play" />
          </div>
          <div style={ buttonContainerStyle } >
            <IconButton iconName="fast-forward" />
          </div>
          <SubToolBox />
        </div>
      </div>
    );
  }
}
