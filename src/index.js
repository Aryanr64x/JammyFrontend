import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthContextWrapper from './contexts/AuthContextWrapper';
import SocketContextWrapper from './contexts/SocketContextWrapper';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SocketContextWrapper>
      <AuthContextWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextWrapper>
    </SocketContextWrapper>
  </React.StrictMode>
);


reportWebVitals();
