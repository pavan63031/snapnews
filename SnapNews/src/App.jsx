import { useEffect, useState } from 'react'
import './App.css'
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  
  return (
  <>
  <Router>
    <Navbar />
    <h1 className="p-6 text-3xl font-bold mb-6 text-center">Top Headlines</h1>
    <Routes>
      <Route exact path='/' element = {<Home category = "general"/>} />
      <Route exact path='/:category' element = {<Home />} />
    </Routes>
    </Router>
  </>
)
}

export default App
