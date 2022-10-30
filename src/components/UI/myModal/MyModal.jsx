import React from 'react'
import styles from './myModal.module.css'

 const MyModal = ({modalActive,title,price,inform,setModalActive}) => {
  console.log(modalActive, "aaaa");
  return(
  
 <div className={modalActive ? 'modalBody active' :'modalBody'}
  onClick={()=>setModalActive(false)}>
      <div className={"modalContent"} onClick={(e)=>e.stopPropagation}>
      <h2>{title}</h2>
        <h4>{price}</h4>
        <p>{inform}</p>
      </div>
    </div>
   
  )
}
export default MyModal