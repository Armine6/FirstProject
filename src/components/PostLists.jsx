import React from 'react'
import PostItem from './PostItem'


 const PostLists = ({details}) => {
  return (
    <div className='postListStyle'>
            {details.map(item => (<PostItem id={item.id} title= {item.title} price={item.price} value= {item.value} inform={item.information} img={item.img} />))}
        
    </div>
  )
}
export default PostLists
