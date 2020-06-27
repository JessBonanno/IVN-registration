import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from './middleware/logger';
import thunk from 'redux-thunk';


import servicesReducer from './store/reducers/services';
import userReducer from './store/reducers/user';

const rootReducer = combineReducers({
  srv: servicesReducer,
  usr: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
