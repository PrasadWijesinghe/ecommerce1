import React, { useContext } from 'react'
import { products } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/shopContext'

const Collection = () => {

    const { product }=useContext(ShopContext);

  return (
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {products.map(product => (
          <div key={product.id} className='border border-gray-200 rounded-lg overflow-hidden'>
            <img src={product.image} alt={product.title} className='w-full h-60 object-cover' />
            <div className='p-4'>
              <p className='font-bold'>{product.title}</p>
              <p className='font-bold'>{product.price}</p>
            </div>
          </div>
        ))}
      
    </div>
  )
}

export default Collection
