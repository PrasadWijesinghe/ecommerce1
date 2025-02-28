import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {

  const {ProductId} = useParams();

  const {products,currency} = useContext(ShopContext);
  const [ProductData,setProductData] = useState(false);
  const [image,setImage] = useState('')


  const fetchProductData = async () =>{
      products.map((item)=>{
        if(item._id === ProductId){
          setProductData(item)
          setImage(item.image[0])
          return null;
        }
      })
  }

  useEffect(()=>{
    fetchProductData();
  },[ProductId])

  return ProductData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:oveflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {
                  ProductData.image.map((item,index)=>(
                    <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>

                  ))
                }
            </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto ' src={image} alt=''/>

            </div>
          </div>

                <div className='flex-1'>

                    <h1 className='font-medium text-2xl'>{ProductData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                	      <img src={assets.star_icon} alt='' className='w-3 5'/>
                        <img src={assets.star_icon} alt='' className='w-3 5'/>
                        <img src={assets.star_icon} alt='' className='w-3 5'/>
                        <img src={assets.star_icon} alt='' className='w-3 5'/>
                        <img src={assets.star_dull_icon} alt='' className='w-3 5'/> 

                        <p className='pl-2'>(122)</p>         
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{ProductData.price}</p>
                  

                </div>
          
      </div>
      
    </div>
  ) :<div className='opacity-0'></div>
}

export default Product
