import React, { useEffect } from 'react'
import Card from './components/Card.jsx'
import axios from 'axios'
import { useState } from 'react';

const App = () => {

 const [userData, setUserData] = useState([]);
 const [index, setIndex] = useState(1);
  
 const getData = async ()=>{
   let responce =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`);
   setUserData(responce.data);
 }

 useEffect(function(){
        getData();
 },[index])

 let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>;
 
 if(userData.length > 0){
  printUserData = userData.map(function(elem, idx){
    
    return <div key={idx} >
       <Card elem = {elem}/>
      </div>
  })
 }

  return (
    <div className='h-screen bg-black p-4 text-white overflow-auto pl-13'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className="flex justify-center items-center p-4 gap-6">
        <button
        id='prevbtn'
         className= {`bg-amber-400 text-black text-sm rounded px-4 py-2 font-bold cursor-pointer ${index !== 1 ? "active:scale-95": "" } `}
         onClick={()=>{
          console.log(index);
          
            if(index > 1){
              setIndex(index - 1);
              setUserData([]);

            }
         }}
        >
          Prev
        </button>
        <h4 className='font-bold text-xl'>Page {index}</h4>
        <button
         className= 'bg-amber-400 text-black text-sm rounded px-4 py-2 font-bold cursor-pointer active:scale-95'
         onClick={()=>{
             setIndex(index + 1);
             setUserData([]);
         }}
         >
          Next
        </button>
      </div>

    </div>
  )
}

export default App;
