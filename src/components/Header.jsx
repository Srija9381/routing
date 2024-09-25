import React from 'react'
// import Home from '../pages/Home'
// import Contact from '../pages/Contact' 
// import Services from '../pages/Services'
// import AboutUs from '../pages/AboutUs'
import { Link,NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div>
        <ul style={{display:"flex",justifyContent:"space-around",listStyleType:"none"}}>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/aboutus'}>aboutus</NavLink></li>
            <li><NavLink to={'/contact'}>contactus</NavLink></li>
            <li><NavLink to={'/services'}>services</NavLink></li>
            <li><NavLink to={'/payment'}>payment</NavLink></li>
        </ul>
      
    </div>
  )
}

export default Header
