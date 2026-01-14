import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from '../src/pages/Landing.jsx'
import Seeall from './pages/Seeall.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div className='bg-[#1b1b1b]'>
      <Landing />
    </div>} />
        <Route path="/items" element={<div className='bg-[#1b1b1b]'>
        <Seeall />
      </div>} />
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App