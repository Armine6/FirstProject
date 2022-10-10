import React from 'react'
import styles from './myInput.module.css'

 const MyInput = ({...props}) => {
  return (
    <input {...props} className={styles.MyInputStyle}/>
  )
}
export default MyInput
