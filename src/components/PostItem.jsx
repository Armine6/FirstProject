import React from 'react'
import Button from './UI/buttons/Button'

 const PostItem = ({title,price,forSmth,inform,img,openMore}) => {
  return (
    <div className='postItemStyle'>

            <img src={img} alt="" className='itemimage'/>
            <div className='inform'>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <h5>{forSmth}</h5>
            <Button onClick= {openMore()}>Show more</Button>
            </div>
           

    </div>
  )
}
export default PostItem
