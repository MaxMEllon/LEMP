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
      repeat: false,
      random: false,
    };
    this.onChangeVolume = this.onChangeVolume.bind(this);
    this.onMute = this.onMute.bind(this);
    this.onRepeat = this.onRepeat.bind(this);
    this.onRandom = this.onRandom.bind(this);
  }

  onChangeVolume(volume) {
    this.setState({ volume });
  }

  onMute() {
    const mute = !this.state.mute;
    this.setState({ mute });
  }

  onRepeat() {
    const repeat = !this.state.repeat;
    this.setState({ repeat });
  }

  onRandom() {
    const random = !this.state.random;
    this.setState({ random });
  }

  render() {
    debug('render');
    const isMute = this.state.mute === true ? 'volume-off' : 'volume-up';
    const muteColor = this.state.mute === true ? 'white' : 'rgb(152, 255, 252)';
    const loopColor = this.state.repeat === true ? 'rgb(152, 255, 252)' : 'white';
    const random = this.state.random === true ? 'random' : 'long-arrow-right';
    const randomColor = this.state.random === true ? 'rgb(152, 255, 252)' : 'white';
    return (
      <div
        className="SubToolBox"
        style={style}
      >
        <div style={{ display: 'inline' }} >
          <div style={ buttonContainerStyle } onClick={ this.onMute } >
            <Icon
              style={{ color: muteColor }}
              className="MuteButton"
              name={ isMute }
            />
          </div>
          <div style={ buttonContainerStyle } >
            <Icon
              style={{ color: loopColor }}
              className="RepeatButton"
              name="refresh"
              spin={ this.state.repeat }
              onClick={ this.onRepeat }
            />
          </div>
          <div style={ buttonContainerStyle } >
            <Icon
              style={{ color: randomColor }}
              className="RandomButton"
              name={ random }
              onClick={ this.onRandom }
            />
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
