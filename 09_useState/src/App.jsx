import React, { useState } from 'react'



const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1 className=' rounded-full m-10 h-10 w-10 flex items-center justify-center bg-amber-900'>{num}</h1>
      <button onClick={()=>{
        setNum(num + 1)
      }}  className='h-10 w-20 bg-amber-500 rounded-2xl ml-10 '>increase</button>
      <button onClick={()=>{
        setNum(num - 1)
      }}  className='h-10 w-20 bg-amber-500 rounded-2xl ml-10 '>decrease</button>
      <button onClick={()=>{
        setNum(num + 5)
      }}  className='h-10 w-20 bg-amber-500 rounded-2xl ml-10 '>Jump by 5</button>
      
    </div>
  )
}

export default App
