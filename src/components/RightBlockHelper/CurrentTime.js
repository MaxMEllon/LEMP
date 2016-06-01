import React from 'react';

const debug = require('../../utils/Debug')('CurrentTime');

export default class CurrentTime extends React.Component {
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
        className="CurrentTime"
        style={{ width: '70%' }}
      >
        <p
          style={{
            color: 'white',
            fontSize: '22px',
            marginLeft: '10px',
            marginTop: '2px',
          }}
        >00:00</p>
      </div>
    );
  }
}
