import React,{ Component } from "react";
import axios from 'axios';

import { Redirect } from 'react-router-dom';


export default class Login extends Component{
    state = {}
    handleSubmit = e =>{
        e.preventDefault();
        const data= {
        username: this.username,
        password: this.password
        }

        axios.post("auth/login",data)
        .then(res => {
        localStorage.setItem('auth_token',res.data.data.auth_token)
        this.setState({
               loggedIn:true
           })
        this.props.setUser(res.data.data)
        })
        .catch(
        err => {
            this.setState({
                message:err.response.data.errors
            })
           
        }
    )
    
    }
render(){
    if (this.state.loggedIn){
        return <Redirect to = {'/'} />
    }
    let error = ''
    if (this.state.message){
       error = (
           <div className="alert alert-danger" role='alert'>
               {this.state.message}
           </div>
       )
    }
    return(
        <form onSubmit={this.handleSubmit}>
            {error }
        <h3>Log In</h3>
        <div className='form-group' >
            <label>User Name</label>
            <input type='text'  className='form-control' placeholder='username'
            onChange={e => this.username = e.target.value} />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input type='password'  className='form-control' placeholder='password'
            onChange={e => this.password = e.target.value}/>
        </div>
        
        <button className='btn btn-primary btn-block'>Log In</button>
        <p className='forgot-password text-right'>
            <a href ='/forgot'>Forgot Password?</a>
        </p>
  </form>
    )
}

}