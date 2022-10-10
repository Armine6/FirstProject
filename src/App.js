import { useState , useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Header/Home";
import Projects from "./components/Header/Projects";
import Aboutus from './components/Header/Aboutus';
import Header from './components/Header/Header';
import Prices from './components/Header/Prices';
import PostLists from './components/PostLists';

function App() {
  const [details, setDetails] = useState([
    { id: 1, title: "House", img: "https://igorsirotov.com/static/uploads/5d/31/89/5d318954d5a69.jpg", price: "67000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 2, title: "House", img: "https://igorsirotov.com/static/uploads/60/2b/82/602b820741d16.jpg", price: "68000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 3, title: "House", img: "https://igorsirotov.com/static/uploads/5b/c6/35/5bc63544af7b3.jpg", price: "2400$", for: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 4, title: "House", img: "https://igorsirotov.com/static/uploads/5e/36/a5/5e36a5bfaf75c.jpg", price: "62000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 5, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/d0/5909d050bf8de.jpg", price: "68000$", value: "For change", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 6, title: "House", img: "https://igorsirotov.com/static/uploads/5f/fc/65/5ffc650c1fbc5.jpg", price: "80000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 7, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/cf/5909cfec6f0d2.jpg", price: "2000$", value: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 8, title: "House", img: "https://igorsirotov.com/static/uploads/61/12/39/611239a147d85.jpg", price: "2150$", value: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 9, title: "House", img: "https://igorsirotov.com/static/uploads/5a/55/db/5a55db976d2b7.jpg", price: "68000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 10, title: "House", img: "https://igorsirotov.com/static/uploads/5b/02/f0/5b02f0897186d.jpg", price: "150000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 11, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/d0/5909d02ce5046.jpg", price: "68000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 12, title: "House", img: "https://igorsirotov.com/static/uploads/5d/31/88/5d3188d5e3192.jpg", price: "68000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 13, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/cf/5909cffeed9a2.jpg", price: "1400$", value: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 14, title: "House", img: "https://igorsirotov.com/static/uploads/61/75/4f/61754fd9630b6.jpg", price: "68000$", value: "For change", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 15, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/cf/5909cffe83c0f.jpg", price: "71000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 16, title: "House", img: "https://igorsirotov.com/static/uploads/61/9e/b2/619eb2acc0d13.jpg", price: "2300$", value: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 17, title: "House", img: "https://igorsirotov.com/static/uploads/5b/02/f0/5b02f09fd2bb3.jpg", price: "68000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 18, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/cf/5909cff30338f.jpg", price: "79000$", value: "For change", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 19, title: "House", img: "https://igorsirotov.com/static/uploads/5a/55/db/5a55db4eaed40.jpg", price: "68000$", value: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 20, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/d0/5909d01c66a69.jpg", price: "18000$", value: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 21, title: "House", img: "https://igorsirotov.com/static/uploads/61/9e/b3/619eb3e18e83b.jpg", price: "68000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 22, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/cf/5909cff10fdb8.jpg", price: "101000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 23, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/d0/5909d02627f6e.jpg", price: "68000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 24, title: "House", img: "https://igorsirotov.com/static/uploads/5d/31/89/5d31894467fb9.jpg", price: "68000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 25, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/d0/5909d01cd4e4e.jpg", price: "2000$", value: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 26, title: "House", img: "https://igorsirotov.com/static/uploads/59/42/90/5942904371211.jpg", price: "68000$", value: "For change", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 27, title: "House", img: "https://igorsirotov.com/static/uploads/59/09/cf/5909cfff5062f.jpg", price: "68000$", value: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { id: 28, title: "House", img: "https://igorsirotov.com/static/uploads/61/f3/0d/61f30d9d6b11d.jpg", price: "2300$", value: "For rate", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
  ])
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
      item.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
    )
  }, [filter.searchQuery, sortQueryFilter])
  console.log(sortQueryFilter);

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <PostLists details={sortSearchQueryFilter} />
    </div>
  );
}

export default App;
