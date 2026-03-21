import React from 'react'

const Navbar = (props) => {
  function themeChanger(){
     props.setTheme('white')
  }

  return (
    <div>
      <button
      onClick={themeChanger}
       className='bg-red-600 px-3 py-2 rounded-xl font-bold m-10'>Change theme</button>
    </div>
  )
}

export default Navbar
