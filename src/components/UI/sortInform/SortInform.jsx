import React from 'react'

 const SortInform = ({options,title,...value}) => {
  return (
    <select {...value}>
        <option>{title}</option>
        {options.map((option)=>
        <option value={option.value} >
           { option.name}
        </option>)}
    </select>
  )
}
export default SortInform