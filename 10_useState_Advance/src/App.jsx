import React, { useState, useSyncExternalStore } from 'react'

const App = () => {
      //    const [num, setNum] = useState({name:"Aryan", age: 18});
    
      //      const btnClicked = ()=>{
      //     setNum(prev => ({...prev, age: 20}));
         
      //  }

      // Batch Update concept
   const [num, setNum] = useState(10);

   const btnClicked = () => {
          setNum(prev => (prev + 1))
          setNum(prev => (prev + 1))
          setNum(prev => (prev + 1))
          setNum(prev => (prev + 1))
   }

  return (
    <>
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked} className='h-10 w-20 bg-red-900 '>Click</button>
    </div>

    </>
  )
}

export default App
