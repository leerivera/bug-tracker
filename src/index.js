import React from 'react';
import ReactDOM from 'react-dom';
import bugReducer from './Controllers/Redux/bugReducer'
import authReducer from './Controllers/Redux/authReducer'
import userReducer from './Controllers/Redux/userReducer'

import { Provider } from 'react-redux';
import { configureStore, combineReducers }  from '@reduxjs/toolkit'
import App from './App';

const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
})

const store = configureStore({
  reducer
})


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


