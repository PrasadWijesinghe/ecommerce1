import React, { useContext } from 'react'; // Import useContext
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);

    console.log(products); 

    return (
        <div>
           
        </div>
    );
};

export default LatestCollection;
