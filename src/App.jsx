import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Visited from './pages/Visited';
import WishList from './pages/WishList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Destination' element={<Destination/>} />
        <Route path='/Visited' element={<Visited/>} />
        <Route path='/Wishlist' element={<WishList/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
