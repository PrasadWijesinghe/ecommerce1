import React, { use } from 'react'
import { assets } from '../assets/frontend_assets/assets' // Ensure correct path
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    const [visible,setvisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <img src={assets.logo} className='w-36' alt="Logo" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />

        {/* Profile dropdown */}
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile" />

          <div className='hidden absolute right-0 pt-4 group-hover:block'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>My Orders</p>
              <p className='cursor-pointer hover:text-black'>Log Out</p>
            </div>
          </div>
        </div>

        {/* Cart with badge */}
        <Link to="/cart" className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer' alt="Cart" />

          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square
        rounded-full text-[8px]'>
            3 {/* Replace 3 with actual cart count dynamically */}
          </p>
        </Link>
        <img onClick={()=>setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />

      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}></div>

            <div className='flex flex-col text-gray-600'>
              <div className='flex items-center gap-4 p-3'>
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Dropdown" />
                <p>Back</p>
              </div>
            </div>
    </div>
  )
}

export default Navbar
