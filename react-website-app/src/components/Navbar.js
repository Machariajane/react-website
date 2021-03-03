import React, { useEffect, useState } from 'react'
import { Link }from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [ click ,setClick ] = useState(false);
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    }
//useeefect to not rerender
useEffect(() => {
    showButton () ; } ,[])    

window.addEventListener('resize',showButton);

  return (
   <>
   <IconContext.Provider value={{ color: '#fff'}}>

   
   <div className="navbar">
       <div className="navbar-container container">
           <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
               <MdFingerprint className='navbar-icon' />
               Got-ya-id
           </Link>
           <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars /> }
           </div>
          <ul className = { click ? 'nav-menu active': 'nav-menu'}>
                <li className = "nav_item">
                    <Link to = '/' className = "nav-links" onClick={closeMobileMenu}>
                       Home
                    </Link>
                </li>
                <li className = "nav_item">
                    <Link to = '/services' className = "nav-links" onClick={closeMobileMenu}>
                        Find Id
                    </Link>
                </li>
                <li className = "nav_item">
                    <Link to = '/products' className = "nav-links" onClick={closeMobileMenu}>
                        Post Id
                    </Link>
                </li>
                <li className = "nav-btn">
                    {button ? (
                        <Link to = '/register' className = "btn-link">
                            <Button buttonStyle = 'btn--outline'>REGISTER</Button>
                        </Link>
                    ) : (
                        <Link to = '/register' className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle = 'btn--outline' buttonSize = 'btn--mobile'> 
                                     REGISTER  
                                </Button>

                        </Link>
                    )}

                </li>
          </ul>
       </div>
   </div>
   </IconContext.Provider>
   </>
  )
}

export default Navbar
