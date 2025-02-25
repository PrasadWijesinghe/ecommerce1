import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets'; // Ensure correct path
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium relative'>

            {/* Logo */}
            <img src={assets.logo} className='w-36' alt="Logo" />

            {/* Desktop Navigation */}
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

            {/* Right Side Icons */}
            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />

                {/* Profile Dropdown */}
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile" />
                    <div className='hidden absolute right-0 pt-4 bg-white shadow-md rounded-lg z-50 group-hover:block'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-500'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>My Orders</p>
                            <p className='cursor-pointer hover:text-black'>Log Out</p>
                        </div>
                    </div>
                </div>

                {/* Cart Icon with Badge */}
                <Link to="/cart" className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer' alt="Cart" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        3 {/* Replace with dynamic cart count */}
                    </p>
                </Link>

                {/* Mobile Menu Icon */}
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
            </div>

            {/* Mobile Sidebar Navigation */}
            <div className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all duration-300 ${visible ? 'w-64 p-5 shadow-lg' : 'w-0 p-0 overflow-hidden'}`}>
                {/* Close Button */}
                <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={() => setVisible(false)}>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
                    <p>Back</p>
                </div>

                {/* Mobile Menu Items */}
                <div className='flex flex-col text-gray-600'>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
