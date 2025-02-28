import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {/* Sidebar Filter Section */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img
            className={`h-3 transition-transform duration-200 ${showFilter ? 'rotate-90' : 'rotate-0'} sm:hidden`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-4' type='checkbox' value='Men' /> Men
            </label>
            <label className='flex gap-2'>
              <input className='w-4' type='checkbox' value='Women' /> Women
            </label>
            <label className='flex gap-2'>
              <input className='w-4' type='checkbox' value='Kids' /> Kids
            </label>
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-4' type='checkbox' value='Topwear' /> Top Wear
            </label>
            <label className='flex gap-2'>
              <input className='w-4' type='checkbox' value='bottomwear' /> Bottom Wear
            </label>
            <label className='flex gap-2'>
              <input className='w-4' type='checkbox' value='Winterwear' /> Winter Wear
            </label>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select className='border-2 border-gray-300 text-sm px-2 py-1 rounded-md'>
            <option value='relavant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
