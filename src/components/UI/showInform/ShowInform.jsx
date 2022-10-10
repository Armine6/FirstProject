import React from 'react'

 const ShowInform = (title,price,inform) => {
  return (
    <div>
        <h2>{title}</h2>
        <h4>{price}</h4>
        <p>{inform}</p>
    </div>
  )
}
export default ShowInform