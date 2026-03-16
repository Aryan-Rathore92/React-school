import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setdetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title, details});
    setTask(copyTask);

    setTitle('')
    setdetails('')
  }

  const deleteNote = (idx)=>{
    const copytask = [...task];
     copytask.splice(idx,1);
     setTask(copytask)
    
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
     <div className='lg:w-1/2 p-10 lg:border-l-2'>
       <h1 className='text-4xl font-bold'>Recent Notes</h1>
       <div className='gap-5 mt-5 flex flex-wrap items-start justify-start overflow-auto h-screen'>
         {task.map(function(elem,idx){
          
          
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52  px-4 pt-9 pb-4 w-40 bg-cover rounded-xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black">
              <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                 deleteNote(idx);

              }} className='active:scale-95 cursor-pointer w-full bg-red-500 text-white rounded py-1 text-xs font-bold '>Delete</button>
            </div>

         })}
     </div>
     </div>
    </div>
  )
}

export default App;
