import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';

import { requestTierList } from './actions/tierlist';
import HSArenaQuickPick from './HSArenaQuickPick';

import store from './store';

store.dispatch(requestTierList());

renderApp(HSArenaQuickPick);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./HSArenaQuickPick', () => {
    const HSArenaQuickPick = require('./HSArenaQuickPick').default;
    renderApp(HSArenaQuickPick);
  });
}

function renderApp(RootElement) {
  render(
    <AppContainer>
      <Provider store={store}>
        <RootElement />
      </Provider>
    </AppContainer>,
    document.getElementById('quickpick-root')
  );
}
