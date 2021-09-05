import React from 'react';
import './App.css';
import Navbar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import home from './components/pages/home';
import products from './components/pages/products';
import signup from './components/pages/SignUp';
import ScrollToTop from './components/ScrollToTop';
import {AnimatePresence} from 'framer-motion';
import CennikStrona from './components/pages/cennik';

function App() {
  return (
    <>
      <Router>
        <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Navbar />
        <Switch>       
          <Route path='/' exact component={home} />
          <Route path='/cennik' component={CennikStrona} />
          <Route path='/products' component={products} />
          <Route path='/sign-up' component={signup} />
        </Switch>
        </AnimatePresence>
      </Router>      
    </>
  );
}

export default App;