import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';
import ChismeApp from './components/ChismeApp';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ChismeApp />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();