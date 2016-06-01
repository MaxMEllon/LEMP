import React from 'react';
import Header from './RightBlockHelper/Header';
import DetailMarkey from './RightBlockHelper/DetailMarkey';
import CurrentTime from './RightBlockHelper/CurrentTime';
import ToolBox from './RightBlockHelper/ToolBox';
import { Icon } from 'react-fa';

const debug = require('../utils/Debug')('RightBlock');

export default class RightBlock extends React.Component {
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
        className="rightBlock"
        style={{
          display: 'inline-block',
          verticalAlign: 'top',
          width: '70%',
          height: '100%',
          backgroundColor: 'rgb(22, 22, 22)',
        }}
      >
        <Header />
        <CurrentTime />
        <DetailMarkey />
        <ToolBox />
      </div>
    );
  }
}
