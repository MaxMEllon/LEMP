import '../assets/style';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

window.onload = () => {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('main')
  );
  if (module.hot) {
    module.hot.accept(err => {
      if (err) console.error(err);
    });
  }
};

// vim: ft=javascript.jsx

