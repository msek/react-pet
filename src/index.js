import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/app/App';

const store = configureStore();

ReactDOM.render((
  <App store={store} />
), document.getElementById('app'));
