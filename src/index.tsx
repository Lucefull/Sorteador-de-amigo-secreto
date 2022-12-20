import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Header } from './components/Header';
import { Card } from './components/Card';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card>
      <App />
    </Card>
  </React.StrictMode>,
  document.getElementById('root')
);
