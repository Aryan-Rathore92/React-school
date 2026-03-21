import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import NavigatebyReactDOM from './components/NavigatebyReactDOM'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <NavigatebyReactDOM/>

      <Footer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path='men' element={<Men/>}/>
           <Route path='women' element={<Women/>}/>
           <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:courseId' element={<CourseDetails/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App
