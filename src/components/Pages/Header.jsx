import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './header.module.css'
// import {ReactComponant as Logo} from "./../../../image/logo.svg"

 const Layout = () => {

  return (

    <div className={styles.headerpart}>
       {/* <Logo/> */}
       <div>
       <div className='manu'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/prices">Prices</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/aboutus">About us</NavLink>
      </div>
      <div>
       
      </div>
       </div>
  
     
 
        
    </div>
  )
}
export default Layout