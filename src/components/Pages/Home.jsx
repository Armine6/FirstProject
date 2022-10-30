import React,{useState,useMemo} from 'react'
import MyModal from '../UI/myModal/MyModal'
import PostLists from '../PostLists'
import {data} from '../../data'
import Header from '../Pages/Header'

 const Home = () => {

const [details, setDetails] = useState(data)

const [filter,setFilter] = useState({
  searchQuery: "",
  sortQuery: ""
})

const sortQueryFilter = useMemo(()=>{
  if(filter.sortQuery){
    return [...details].sort((a,b) =>
      a[filter.sortQuery] > b[filter.sortQuery] ? 1 :-1 )
  }
  return details
},[filter.sortQuery, details])
console.log(filter.sortQuery);

const sortSearchQueryFilter = useMemo(()=>{
  return sortQueryFilter.filter((item)=>
    item.value.toLowerCase().includes(filter.searchQuery.toLowerCase())
  )
}, [filter.searchQuery, sortQueryFilter])
console.log(sortQueryFilter);

const [modalActive,setModalActive] =useState(false)
const [currentId,setCurrentId] = useState(0)

const modalChange = (id)=>{
setCurrentId(id)
setModalActive(true)
}

  return (
    <div>
      <Header />
      <PostLists details={sortSearchQueryFilter} modalChange={modalChange} filter={filter} setFilter={setFilter}/>
      <MyModal modalActive={modalActive} setModalActive={setModalActive} title={details[currentId].title} price={details[currentId].price} inform={details[currentId].information}/>
    </div>
  )
}

export default Home