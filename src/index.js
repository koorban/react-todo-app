import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextTodo from './ContextTodo';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ContextTodo>
    <App />
  </ContextTodo>,document.getElementById('root')
);

