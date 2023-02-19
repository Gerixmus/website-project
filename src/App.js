import React from 'react';
import './App.css';
import Navbar from './components/NavBar'
import {Route, Routes} from 'react-router-dom';
import Home from './components/pages/home';
import Products from './components/pages/products';
import Signup from './components/pages/SignUp';
import ScrollToTop from './components/ScrollToTop';
import CennikStrona from './components/pages/cennik';
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/website-project' element={<Home/>}/>   
        <Route path='/website-project/cennik' element={<CennikStrona/>} />
        <Route path='/website-project/products' element={<Products/>} />
        <Route path='/website-project/sign-up' element={<Signup/>} /> 
      </Routes>
      </AnimatePresence>   
    </>
  );
}

export default App;