import React,{ Component } from "react";
import axios from "axios";

export default class Register extends Component{
    state =  {}
handleSubmit = e =>{
    e.preventDefault()
     const data = {
        username: this.username,
        email : this.email,
        password: this.password
        
     }
    axios.post("api/auth",data).then(
        res => {
            console.log(res)
        }
    ).catch(
        err => {
            this.setState({
                message:err.response.data.errors
            })
           
        }
    )
}

render(){
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
           {error}
              <h3>Sign Up</h3>
              <div className='form-group' >
                  <label>User Name</label>
                  <input type='text'  className='form-control' placeholder='username'
                  onChange={e => this.username = e.target.value} />
              </div>
             
              <div className='form-group'>
                  <label>Email</label>
                  <input type='email'  className='form-control' placeholder='Email'
                  onChange={e => this.email = e.target.value}/>
              </div>
              <div className='form-group'>
                  <label>Password</label>
                  <input type='password'  className='form-control' placeholder='password'
                  onChange={e => this.password = e.target.value}/>
              </div>
              
              <button className='btn btn-primary btn-block'>Sign Up</button>
        </form>
    )
}

}