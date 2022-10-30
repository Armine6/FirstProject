import React from 'react'


 const MyInput = ({...props}) => {
  return (
    <input {...props} style ={{background: "rgb(19,19,19)", color:"white"} }/>
  )
}
export default MyInput
