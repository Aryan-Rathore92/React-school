import React from 'react'

const Card = (props) => {
  
   
    
  return (

    <a href= {props.elem.url} target='_blank'>
      <div>
            <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
              <img className='h-full w-full object-cover border-none' src= {props.elem.download_url} alt="" />
            </div>
              <h2 className='font-bold text-lg'>{props.elem.author}</h2>
      </div>
    </a>

  )
}

export default Card
