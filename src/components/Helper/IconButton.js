import React from 'react';
import { Icon } from 'react-fa';

const debug = require('../../utils/Debug')('IconButton');

const style = {
  width: '100%',
  height: '55%',
};

export default class ToolBox extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // deafult state
  //   };
  // }

  render() {
    debug('render');
    const marginLeft = this.props.iconName === 'play' ? '10px' : '8px';
    return (
      <div
        className="IconButton"
        style={{
          borderRadius: '30px',
          width: '30px',
          height: '30px',
        }}
      >
        <div
          className="ButtonContainer"
          style={{
            marginTop: '5px',
            marginLeft,
          }}
        >
          <Icon name={this.props.iconName} />
        </div>
      </div>
    );
  }
}
