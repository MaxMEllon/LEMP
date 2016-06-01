import React from 'react';
import Body from '../components/Body';

const debug = require('../utils/Debug')('AppContainer');

const style = {
  width: '100%',
  height: '100%',
};

export default class AppContainer extends React.Component {
  render() {
    debug('render');
    return (
      <div
        className ="AppContainer"
        style={style}
      >
        <Body />
      </div>
    );
  }
}
