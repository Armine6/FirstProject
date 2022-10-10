import React from 'react'
import Button from './UI/button/Button'
import ShowInform from './UI/showInform/ShowInform'

 const PostItem = ({title,price,value,inform,img}) => {
  return (
    <div className='postItemStyle'>

            <img src={img} alt="" className='itemimage'/>
            <div className='inform'>
            <h5>{value}</h5>
            <Button onClick= {()=>(<ShowInform title={title} price={price} inform={inform}/>)}>Show more</Button>
            </div>
    </div>
  )
}
export default PostItem
