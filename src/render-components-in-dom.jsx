import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import store from './redux/store';
import storeM from './mobx/stores/store';

export default function RenderComponents() {
  return (
    <Provider store={store} storeM={storeM} >
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </Provider>
  );
}
