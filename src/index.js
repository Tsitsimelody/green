import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const element = document.createElement('div');
document.body.appendChild(element);
ReactDOM.render(<App />, element);
