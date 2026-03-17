import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const Firstexplain = () => {

      const [num, setNum] = useState(0);
      const [num2, setnum2] = useState(10)
    
    useEffect(() => {
           console.log("Use effect is runing....");     
     },[num2]);
  return (
  <div>
      <h1 className='bg-gray-300 h-20 w-20 flex items-center justify-center text-2xl rounded-3xl m-10'>{num}</h1>
      <h1 className='bg-gray-300 h-20 w-20 flex items-center justify-center text-2xl rounded-3xl m-10'>{num2}</h1>
      <button 
      onClick={()=>{
      setNum(num + 1) 
      }}
      onDoubleClick={()=>{
        setnum2(num2 + 10)
      }}
      
      
      className='bg-red-900 h-10 w-20 text-xl rounded-xl m-20'>Click</button>
    </div>
  )
}

export default Firstexplain
