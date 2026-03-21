import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ArrowLeft,ArrowRight } from 'lucide-react';
const NavigatebyReactDOM = () => {

      let navigate = useNavigate()
  return (
    <div className='flex bg-cyan-500'>
      <button
      onClick={()=>{
        navigate('/')
      }}
      className='bg-amber-500 text-black px-3 py-2 m-5 rounded font-bold active:scale-95 flex'><ArrowLeft />Back to home</button>
      <button
      onClick={()=>{
       navigate(-1)
      }}
      className='bg-amber-500 text-black px-3 py-2 m-5 rounded font-bold active:scale-95 flex'><ArrowLeft />Back</button>
      <button
      onClick={()=>{
       navigate(1)
      }}
      className='bg-amber-500 text-black px-3 py-2 m-5 rounded font-bold active:scale-95 flex'>Next <ArrowRight /></button>
    </div>
  )
}

export default NavigatebyReactDOM
