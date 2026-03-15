import React from 'react'
import { useState } from 'react';

const App = () => {
   
  const [text, setText] = useState('');
    const formSubmited = (e)=>{
    e.preventDefault();
     console.log("Form submitted by:-",text);
     setText('')
    
  }
  return (
    <div>
    <form onSubmit={(e)=>{
        formSubmited(e);
      }}>
     <input 
     type="text"
     placeholder='Enter your Name'
     className='border-1'
     value={text}
     onChange={(e)=>{
           setText(e.target.value)
           
     }}
     />
     <button className='bg-red-800 h-10 w-20 rounded-xl'>Submit</button>
     </form>
    </div>
  )
}

export default App
