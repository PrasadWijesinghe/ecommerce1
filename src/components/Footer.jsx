import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt='Logo' />
        <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            purus sit amet nunc.
        </p>
      </div>

      <div >
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>

            </ul>
      </div>

      <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-23202-323-32</li>
                <li>contact@foreveryou.com</li>
            </ul>
      </div>

    </div>
    <div>
        <hr className='border-t border-gray-300' />
        <p className='py-5 text-sm text-center'>© 2024 ForeverYou. All Rights Reserved.</p>

    </div>


    </div>
  )
}

export default Footer
