import React from 'react'
import MyInput from './UI/input/MyInput'
import SortInform from './UI/sortInform/SortInform'

 const FilterPost = ({filter,setFilter}) => {
  return (
    <div>
    <SortInform 
    options={[
            { value: "price", name: "Sort by Price" },
            { value: "value", name: "Sort by Value" }
          ]}
     title="Show more"
     value={filter.sortQuery} 
     onChange ={e => setFilter({...filter, sortQuery: e.target.value})}/>

    <MyInput 
    value ={filter.searchQuery} 
    onChange ={e=> setFilter({...filter, searchQuery: e.target.value})}/>
    {console.log(filter.searchQuery)};
    </div>
    
  )
}
export default FilterPost