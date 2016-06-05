import '../assets/style';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './stores/MusicStore';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';

const initialState = {
  foo: 'hoge',
};

window.addEventListener('load', () => {
  ReactDOM.render(
    (
      <Provider key="Provider" store={createStore()} >
        <AppContainer />
      </Provider>
    ),
    document.querySelector('#main')
  );
  if (module.hot) {
    module.hot.accept(err => {
      if (err) console.error(err);
    });
  }
});

// vim: ft=javascript.jsx

