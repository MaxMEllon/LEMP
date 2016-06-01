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
  display: 'table-cell',
};

export default class ToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false,
    };
    this.onPlay = this.onPlay.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onPlay() {
    const pause = !this.state.pause;
    this.setState({ pause });
  }

  onStop() {
    this.setState({ pause: false });
  }

  render() {
    debug('render');
    const pause = this.state.pause === true ? 'pause' : 'play';
    return (
      <div
        className="ToolBox"
        style={style}
      >
        <div style={{ display: 'table' }} >
          <div style={ buttonContainerStyle } >
            <IconButton iconName="fast-backward" />
          </div>
          <div
            style={ buttonContainerStyle }
            onClick={ this.onStop }
          >
            <IconButton iconName="stop" />
          </div>
          <div
            style={ buttonContainerStyle }
            onClick={ this.onPlay }
          >
            <IconButton iconName={ pause } />
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
