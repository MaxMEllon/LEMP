import React from 'react';
import { connect } from 'react-redux';
import Body from '../components/Body';

const debug = require('../utils/Debug')('AppContainer');

const style = {
  width: '100%',
  height: '100%',
};

class AppContainer extends React.Component {
  render() {
    debug('render %o', this.props);
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

export default connect(
  state => state,
)(AppContainer);
// export default AppContainer;

// vim:ft=javascript.jsx
