import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import FindId from './components/pages/FindId/FindId';
import PostId from './components/pages/PostId/PostId';
import Register from './components/pages/SignUp/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import LogIn from './components/pages/SignUp/LogIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/findid' component={FindId} />
        <Route path='/postid' component={PostId} />
        <Route path='/register' component={Register} />
        <Route path= '/login' component={LogIn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
