import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Secondexplain = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    function aClicked(){
        console.log("A succesfully clicked");
    }
    function bClicked(){
        console.log("B succesfully clicked");
    }

    useEffect(() => {
          aClicked();
    }, [num1,num2])
    

  return (
    <div>
        <div className='flex m-20 gap-5'>
        <h1 className='bg-gray-400 h-15 w-20 rounded-xl flex items-center justify-center text-2xl '>{num1}</h1>
        <h1  className='bg-gray-400 h-15 w-20 rounded-xl flex items-center justify-center text-2xl '>{num2}</h1>
        </div>
        <button onClick={()=>{
           setNum1(num1 + 1)
        }} className='bg-red-900 h-10 w-20 text-xl rounded-xl m-20'>Click</button>
        <button onClick={()=>{
            setNum2(num2 - 1);
        }} className='bg-amber-600 h-10 w-20 text-xl rounded-xl '>Click</button>
     </div>
  )
}

export default Secondexplain
