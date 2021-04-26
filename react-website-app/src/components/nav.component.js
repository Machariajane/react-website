import React,{ Component } from "react";

export default class Navbar extends Component{
   handleLogout = () => {
    localStorage.clear()
    this.props.setUser(null)
   }

render(){
  let buttons;
  if (this.props.user){
    buttons = (
    <ul className='navbar-nav ml-auto'>
    <li className='nav-item'>
        <a href="/profile"  className='nav-link'>{this.props.user.username} profile</a> 
    </li>
    <li className='nav-item'>
        <a href="/" onClick={this.handleLogout} className='nav-link'>Log-Out</a> 
    </li>
    </ul>
    
 )
  }else{
   buttons = (
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                   <a href="/login" className='nav-link'>Log-In</a>
                </li>
                <li className='nav-item'>
                   <a href="/register" className='nav-link'>Sign Up</a>
                </li>
              </ul>
   )
  }
    return(
        <nav className='navbar navbar-expand navbar-light fixed-top'>
        <div className='container'>
            <a href = "/" className='navbar-brand'>Home</a>
            <div className='collapse navbar-collapse'>
              {buttons}
            </div>
        </div>

      </nav>
        
    )
}

}