import React from 'react';
import { Icon } from 'react-fa';
import Slider from 'react-rangeslider';

const debug = require('../../utils/Debug')('SubToolBox');

const style = {
  width: '25%',
  height: '55%',
  paddingLeft: '5px',
  display: 'table',
};

const buttonContainerStyle = {
  minWidth: '23px',
  height: '20px',
  display: 'table-cell',
  zIndex: 1,
};

export default class SubToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0,
      mute: false,
    };
    this.onChangeVolume = this.onChangeVolume.bind(this);
    this.onMute = this.onMute.bind(this);
  }

  onMute() {
    const mute = !this.state.mute;
    debug('mute %o', mute);
    this.setState({ mute });
  }

  onChangeVolume(volume) {
    this.setState({ volume });
  }

  render() {
    debug('render');
    const isMute = this.state.mute === true ? 'volume-off' : 'volume-up';
    return (
      <div
        className="SubToolBox"
        style={style}
      >
        <div style={{ display: 'inline' }} >
          <div style={ buttonContainerStyle } onClick={ this.onMute } >
            <Icon className="MuteButton" name={ isMute } />
          </div>
          <div style={ buttonContainerStyle } >
            <Icon className="RepeatButton" name="refresh" />
          </div>
          <div style={ buttonContainerStyle } >
            <Icon className="RandomButton" name="random" />
          </div>
        </div>
        <Slider
          min={0}
          max={100}
          step={1}
          value={this.state.volume}
          onChange={this.onChangeVolume}
        />
      </div>
    );
  }
}
