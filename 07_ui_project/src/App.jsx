import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://i.pinimg.com/736x/50/4e/7e/504e7e405d2319d12e17f8e71b3bbd96.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio",
      tag: "Satisfied",
      color: "yellow",
    },
    {
      img: "https://i.pinimg.com/736x/d9/7e/67/d97e67627110cd2801c41956b08a1a38.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio",
      tag: "UnderServed",
      color: "pink",
    },
    {
      img: "https://i.pinimg.com/736x/94/ae/07/94ae07371f936adc076ec11cfa6dd1a1.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio",
      tag: "Underbanked",
      color: "yellowgreen",
    },
    {
      img: "https://i.pinimg.com/736x/90/60/3b/90603b51ee783cbcfc25e49ada189565.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio",
      tag: "Underbanked",
      color: "black",
    },
    {
      img: "https://i.pinimg.com/736x/f7/42/07/f742076da911a7b1c8d59d551bf4f0b7.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio",
      tag: "Underbanked",
      color: "orange",
    },
    {
      img: "https://i.pinimg.com/1200x/f4/62/3c/f4623c60e83e780fcf5d4dcf5f5a77a5.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio",
      tag: "Underbanked",
      color: "aqua",
    },
    {
      img: "https://i.pinimg.com/736x/e4/0f/db/e40fdb79d4690b5996d7000c929fafe7.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio",
      tag: "Underbanked",
      color: "lightgreen",
    },
    {
      img: "https://i.pinimg.com/736x/ee/e8/85/eee885a82fbbab2cc080c7cb9c739942.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio",
      tag: "Underbanked",
      color: "red",
    },
  ]

  
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
