import { createStore, applyMiddleware } from 'redux';
import hermit from 'redux-hermit';

export const initialState = {
  currentMusic: '',
  playList: [],
};

export default () => (
  createStore(
    (state, action) => {
      switch (action.type) {
        case 'play_music':
          return state;
        default:
          return state;
      }
    },
    initialState,
    applyMiddleware(hermit),
  )
);
