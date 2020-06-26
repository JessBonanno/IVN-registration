import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { logger } from './middleware/logger';

import servicesReducer from './store/reducers/services';

const rootReducer = combineReducers({
  srv: servicesReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
