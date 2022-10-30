import React from 'react'
import Button from './UI/button/Button'

 const PostItem = ({id,value,img,modalChange}) => {
  return (
    <div className='postItemStyle'>

            <img src={img} alt="" className='itemimage'/>
            <div className='inform'>
            <h5>{value}</h5>
            <Button onClick={()=>modalChange(id)}>Show more</Button>
            </div> 
    </div>
  )
}
export default PostItem

