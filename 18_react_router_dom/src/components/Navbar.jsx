import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-amber-400 h-15 w-full'>
        <h3 className='text-2xl font-bold text-black pl-5'>Aryan</h3>
      <div className='flex gap-10 justify-between underline text-blue-700 pr-5'>
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/contact'>Contact</Link>
       <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
