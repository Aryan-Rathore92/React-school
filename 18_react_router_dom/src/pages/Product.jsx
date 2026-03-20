import React from 'react'

const Product = () => {
  return (
    <div>
      <div className='m-10 border-2 h-100 w-80 flex flex-col justify-around p-5 rounded-xl'>
        <img className='h-40 rounded-xl' src="https://i.pinimg.com/1200x/f6/b2/8d/f6b28d15a4834b745086d65373074c18.jpg" alt="" />
        <h3 className='font-bold text-xl'>Aryan Rathore</h3>
        <button className='bg-red-600 w-25 h-10 rounded-xl text-black'>Click Here</button>
      </div>
    </div>
  )
}

export default Product
