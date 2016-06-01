import React from 'react';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

const debug = require('../utils/Debug')('Body');

const style = {
  backgroundColor: 'rgb(22, 22, 22)',
  height: '100%',
  width: '100%',
  display: 'inline',
  verticalAlign: 'top',
};

export default class Body extends React.Component {
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
        className="Body"
        style={style}
      >
        <LeftBlock className="selectableMenu" />
        <RightBlock className="selectableMenu" />
      </div>
    );
  }
}
