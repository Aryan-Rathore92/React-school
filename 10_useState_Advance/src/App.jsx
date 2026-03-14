import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({name:"Aryan", age: 18});

  let numClicked = ()=>{
    
     setNum({name:"Sarthak", age: 15})
  }

  return (
    <div>
      <h1>{num.name} : {num.age}</h1>
      <button onClick={numClicked} className='h-10 w-20 bg-red-900 '>Click</button>
    </div>
  )
}

export default App
