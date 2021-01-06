import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './components/Layouts/MainLayout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
