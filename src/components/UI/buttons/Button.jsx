import React from 'react'
import style from './button.module.css'

 const Button = ({children,...props}) => {
  return (
    <button {...props} className = {style.buttonStyle}>
        {children}
    </button>
  )
}
export default Button