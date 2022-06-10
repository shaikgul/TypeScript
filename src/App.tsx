import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Gulnaz from './components/gulnaz';
import Home from './components/home';
import Backdrop from './navigation/Backdrop';
import Sidebar from './navigation/sidebar';
import ToolBar from './navigation/ToolBar';

function App() {
  const [sideBar, setSidebar] = useState(false)
  const result=useSelector((state:any)=>(state))

  const toggle = () => {
    console.log("key")
    setSidebar((prevState) => !prevState)

  }

  return (
    <Router>
      <div className='App'>
        <ToolBar cartCount={result.cartService.length}  onClick={toggle}     />
        <Backdrop onClick={() => toggle()} sidebar={sideBar} />
        <Sidebar sidebar={sideBar} onClick={toggle} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Gulnaz />} />
          <Route path='/about' element={<About />} />
          <Route path='/harshad' element={<About />} />
        </Routes>
      </div>
    </Router>

  );

}



export default App


