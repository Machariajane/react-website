import React from 'react';
import SignUp from './SignUp';
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import LogIn from './LogIn'


function Register() {
  return (
    <>
    <Router>

     <Route path = "/login" component= {LogIn} />
      <Route path="/register" component={SignUp} />
    </Router>
      
    </>
  );
}

export default Register;