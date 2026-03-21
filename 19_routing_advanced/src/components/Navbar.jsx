import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-cyan-900 h-15 flex items-center justify-between w-full'>
      <h2 className='text-2xl font-bold text-white pl-5'>Aryan</h2>
      <div className='flex text-white  gap-10 pr-7 text-lg'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
