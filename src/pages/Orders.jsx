import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from '../components/Title'

const Orders = () => {

  const {products,currency} = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>

        <div className='text-2xl '>
              <Title text1={'MY'} text2={'ORDERS'} />
        </div>

        <div>
            {
              products.slice(1,4).map((item,index)=>(
                <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-center gap-4'>
                    <div className='flex items-start gap-6 text-sm'>
                          <img src={item.image[0]} className='w-16 sm:w-20' />
                    </div>
                    <div>
                    <p className='sm:text-base font-medium' >{item.Name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                        <p className='text-lg'>{currency}{item.price}</p>
                        <p>Quantity</p>
                        <p>Size</p>
                    </div>
                    <p> Date:<span className='text-gray-400' >25,June </span> </p>
                </div>
                </div>

                
              ))
            }
        </div>

    </div>
  )
}

export default Orders
