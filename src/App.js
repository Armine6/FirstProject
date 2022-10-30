import { useState , useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Aboutus from './components/Pages/Aboutus';
import Header from './components/Pages/Header';
import Prices from './components/Pages/Prices';
import PostLists from './components/PostLists';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      
    </div>
  );
}

export default App;
