import React from 'react'

const RightCardContent = (props) => {
console.log(props.color);


  
  return (
    <div>
      <div className='absolute top-0 left-0 b h-full w-full p-8 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full text-xl font-semibold h-12 w-12 flex items-center justify-center'>{props.id+1}</h2>
      <div>

            <p className='text-xl text-shadow-2xs leading- text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur cum illo iure architecto distinctio</p>
        <div className='flex justify-between'>
            <button style={{backgroundColor: props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.button}</button>
            <button style={{backgroundColor: props.color}} className=' text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default RightCardContent
