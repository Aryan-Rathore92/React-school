import React from 'react'

const App = () => {

  const formSubmited = (e)=>{
    e.preventDefault();
     console.log(e.target[0].value);
     
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formSubmited(e);
      }}>
     <input type="text" placeholder='Enter your Name' className='border-1'/>
     <button className='bg-red-800 h-10 w-20 rounded-xl'>Submit</button>
     </form>
    </div>
  )
}

export default App
