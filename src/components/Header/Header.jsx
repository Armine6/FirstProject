import React from 'react'
import {Link} from 'react-router-dom'
import FilterPost from '../FilterPost'
import styles from './header.module.css'
// import {ReactComponant as Logo} from "./../../../image/logo.svg"

 const Header = ({filter,setFilter}) => {
  return (

    <div className={styles.headerpart}>
       {/* <Logo/> */}
       <div>
       <div className='manu'>
      <Link to="/">Home</Link>
      <Link to="/prices">Prices</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/aboutus">About us</Link>
      </div>
      <div>
        <FilterPost filter={filter} setFilter={setFilter}/>
      </div>
       </div>
  
     
 
        
    </div>
  )
}
export default Header