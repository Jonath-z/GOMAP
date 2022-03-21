import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';

import {
  BrowserRouter 
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    {/* <Header/> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


