import React from 'react';

const debug = require('../../utils/Debug')('DetailMarkey');

export default class DetailMarkey extends React.Component {
  render() {
    debug('render');
    return (
      <div
        className="DetailMarkey"
        style={{
          width: '100%',
          height: '14px',
          marginTop: '5px',
          backgroundColor: 'rgba(255, 0, 94, 0.35)',
        }}
      >
        <p
          style={{
            color: 'white',
            fontSize: '9px',
            marginLeft: '10px',
            paddingButtom: '1px',
          }}
        >
          sample text, file情報などを流す
        </p>
      </div>
    );
  }
}
