import { useState } from 'react';
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
    { title: "House", img: "https://igorsirotov.com/static/uploads/60/2b/82/602b820741d16.jpg", price: "68000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { title: "House", img: "https://igorsirotov.com/static/uploads/60/2b/82/602b820741d16.jpg", price: "68000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { title: "House", img: "https://igorsirotov.com/static/uploads/60/2b/82/602b820741d16.jpg", price: "68000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { title: "House", img: "https://igorsirotov.com/static/uploads/60/2b/82/602b820741d16.jpg", price: "68000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { title: "House", img: "https://igorsirotov.com/static/uploads/60/2b/82/602b820741d16.jpg", price: "68000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
    { title: "House", img: "https://igorsirotov.com/static/uploads/60/2b/82/602b820741d16.jpg", price: "68000$", for: "For sale", information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae unde temporibus nostrum libero, deleniti, ipsam quo soluta sed, quas placeat odio. Iste, nobis similique." },
  ])
const openMore = () =>{

}

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <PostLists detail={details}  openMore={openMore}/>
    </div>
  );
}

export default App;
