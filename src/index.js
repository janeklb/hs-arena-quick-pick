import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';

import { requestTierList } from './actions/tierlist';
import HSArenaQuickPick from './HSArenaQuickPick';

import store from './store';

store.dispatch(requestTierList());

render(
  <AppContainer>
    <Provider store={store}>
      <HSArenaQuickPick />
    </Provider>
  </AppContainer>,
  document.getElementById('quickpick-root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./HSArenaQuickPick', () => {
    const HSArenaQuickPick = require('./HSArenaQuickPick').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <HSArenaQuickPick />
        </Provider>
      </AppContainer>,
      document.getElementById('quickpick-root')
    );
  });
}
