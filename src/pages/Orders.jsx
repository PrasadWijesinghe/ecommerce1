import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="w-full max-w-4xl mx-auto"> {/* Centering container */}
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="py-6 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center gap-6 px-4">
            
            {/* Image */}
            <div className="flex items-center gap-4">
              <img src={item.image[0]} className="w-24 sm:w-28 rounded-md shadow-md" alt="Product" />
            </div>

            {/* Product Name */}
            <p className="sm:text-lg font-medium flex-1">{item.Name}</p>

            {/* Price & Details */}
            <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
              <p className="text-lg font-semibold">{currency}{item.price}</p>
              <p className="mx-2">Quantity</p>
              <p className="mx-2">Size</p>
            </div>

            {/* Date */}
            <p className="text-gray-600 font-medium">
              Date: <span className="text-gray-400">25, June</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
