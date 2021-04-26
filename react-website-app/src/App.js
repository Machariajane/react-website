import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component'
import Navbar from './components/nav.component'
import Login from './components/login.component'
import Register  from './components/register.component'
import Forgot from './components/forgot.component'
import Profile from './components/profile.component'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { Component } from 'react';
import axios from 'axios';


export default class App extends Component {
  state = {}
  componentDidMount = () => {
  axios.get('user').then(
        res=> {
            this.setUser(res.data.data.user)
            
        },
            err => {
                console.log(err);
            }
    )
}
setUser = user => {
  this.setState({
    user:user
})
}

  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar user={this.state.user} setUser={this.setUser}/>
      <div className='auth-wrapper'>
           <div className='auth-inner'>
              <Switch>
                 <Route exact path='/' component={() => <Home user={this.state.user} />} />
                 <Route exact  path='/login' component={() => <Login setUser={this.setUser} /> } />
                 <Route exact path='/register' component={Register} />
                 <Route exact path = '/forgot' component={Forgot} />
                 <Route exact path = '/profile' component={Profile} />
              </Switch>
           </div>
      </div>
    </div>
    </BrowserRouter>
    
  )
}
}

