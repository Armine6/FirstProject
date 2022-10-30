import React from 'react'
import FilterPost from './FilterPost'
import PostItem from './PostItem'



 const PostLists = ({details,modalChange,filter,setFilter}) => {
  return (
    <div >
     <div className='filter'>
     <FilterPost filter={filter} setFilter={setFilter}/> 
     </div>
     <div className='postListStyle'>
     {details.map(item => (<PostItem   key={item.id} id={item.id} value= {item.value} img={item.img} modalChange={modalChange} />))}
     </div>
           
        
    </div>
  )
}

export default PostLists
