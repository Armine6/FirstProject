import React from 'react'
import PostItem from './PostItem'


 const PostLists = ({detail,openMore}) => {
  return (
    <div className='postListStyle'>
            {detail.map(item => (<PostItem title= {item.title} price={item.price} forSmth= {item.for} inform={item.information} img={item.img} openMore={openMore} />))}
        
    </div>
  )
}
export default PostLists
