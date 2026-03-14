import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  
  
  return (
    <div className='bg-red-800 shrink-0 h-full w-80 rounded-4xl overflow-hidden relative select-none'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent id={props.id} color={props.color} button={props.button}/>
    </div>
  )
}

export default RightCard
