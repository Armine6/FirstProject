import React from 'react'
import {Link} from 'react-router-dom'

 const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/prices">Prices</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/aboutus">About us</Link>
        
    </div>
  )
}
export default Header