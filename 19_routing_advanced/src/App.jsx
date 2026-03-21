import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Product'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Footer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Contact/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default App
