import React from 'react'
import {logo} from "../../assets/index"

function Header() {
  return (
    <div className='w-full bg-black text-white px-4 py-3'>
        <div>
            <img className='w-24 mt-2 ' src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Header