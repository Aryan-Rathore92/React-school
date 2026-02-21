import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (

     <div className='parent'>
       <Card user= "Sarthak Rathore" img = "https://images.unsplash.com/photo-1536163493384-0436bd4ee1df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       <Card user = "Devansh Rathore" img = "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJ8ZW58MHx8MHx8fDA%3D"/>
       <Card user = "Unnati Sister" img = "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyfGVufDB8fDB8fHww"/>

    </div> 

    

    
  )
}

export default App;
