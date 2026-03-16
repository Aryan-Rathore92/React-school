import React from 'react'

const App = () => {

let user = {
  name: "Aryan",
  age: 18,
  city: "Muzaffarnagar",
}


let item = localStorage.getItem("user");
let newItem = JSON.parse(item);
console.log(newItem);

  

  return (
    <div>
      
    </div>
  )
}

export default App
