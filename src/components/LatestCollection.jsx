import React, { useContext, useEffect, useState } from 'react'; // Added useState
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]); // Corrected useState import

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]); // Added 'products' as a dependency to avoid stale state

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem, ipsum doloras  ssit amet consecteturer adipisicing elit. Ab, animi recusandae inventore impedit quod nesciunt amet architecto molestiae assumenda, sit placeat? Similique animi velit magnam quae dolore facilis? Id, dolorum.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
