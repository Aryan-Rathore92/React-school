import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setdetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title, details});
    setTask(copyTask);
    console.log(task);
    
    setTitle('')
    setdetails('')
  }
  return (
    <div className=' bg-black text-white lg:flex'>
      {/* // form */}
     <form onSubmit={(e)=>{
        submitHandler(e);


     }} className='lg:w-1/2 flex gap-4 flex-col p-10'>
      
      {/* Heding */}
      <h1 className='text-4xl font-bold'>Add Notes</h1>
        
        {/* First Input section */}
        <input
        type="text" 
        placeholder='Enter Notes Heading' 
        className='font-medium w-full border-2 px-5  py-2 rounded outline-none'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        {/* Second Input Section */}
        <textarea
        type="text" 
        placeholder='Write Details Here' 
        className=' overflow-hidden font-medium w-full border-2 h-32 px-5 py-2 rounded outline-none flex items-start'
        value={details}
        onChange={(e)=>{
          setdetails(e.target.value);
        }}
        ></textarea> 
        <button
        className='w-full bg-white text-black px-5 py-2 rounded active:scale-97'>
          Add Notes
        </button>
     </form>

      {/* card div */}
     <div className='lg:w-1/2 p-10 lg:border-l-2 '>
       <h1 className='text-4xl font-bold'>Recent Notes</h1>
       <div className='gap-5 mt-5 flex flex-wrap items-start justify-start overflow-auto h-screen'>
         {task.map(function(elem,idx){
          
            return <div key={idx} className=" relative h-52  px-4 py-6 w-40 bg-cover rounded-xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black">
              <h2 className='absolute top-5 right-5'> <X /></h2>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>

         })}
     </div>
     </div>
    </div>
  )
}

export default App;
