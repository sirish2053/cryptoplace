import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css'; 
import CoinContextProvider from './context/CoinContext.jsx';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CoinContextProvider>
      <App/>
      </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
