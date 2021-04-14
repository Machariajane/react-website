import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-expand navbar-light fixed-top'>
        <div className='container'>
            <a href = "" className='navbar-brand'>Home</a>
            <div className='collapse navbar-collapse'>
             <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                   <a href="/" className='nav-link'>Log-In</a>
                </li>
                <li className='nav-item'>
                   <a href="/" className='nav-link'>Sign Up</a>
                </li>
              </ul>

            </div>
        </div>

      </nav>
      <div className='auth-wrapper'>
           <div className='auth-inner'>
               <h2>You are not logged in</h2>
           </div>
      </div>
    </div>
  )
}

export default App
