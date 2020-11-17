import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  RecoilRoot
} from 'recoil';

import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </RecoilRoot>,

  document.getElementById('root')
);


reportWebVitals();
