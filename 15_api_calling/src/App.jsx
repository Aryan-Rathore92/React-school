import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
{/*
  // const getData = async ()=> {
  //   const response = await  fetch('https://jsonplaceholder.typicode.com/photos')
  //      const data = await response.json();
  //   console.log(data);   
  // }
  */}
  const [data, setData] = useState([]);
   
const getData =  async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list');
  setData(response.data);
    
}


  return (
    <div>
      <button onClick={getData} className='bg-amber-500 h-10 w-20 m-10 rounded-xl'>get Data</button>
      <div>
        {data.map(function(elem,idx){
             return <h3 key={idx}> {idx}Hello, {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App
