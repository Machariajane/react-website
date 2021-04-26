import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL= 'https://got-ya-id.herokuapp.com/api/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token')


ReactDOM.render(
 
    <App />
 ,
  document.getElementById('root')
);


