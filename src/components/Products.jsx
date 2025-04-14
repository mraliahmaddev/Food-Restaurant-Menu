import React, { useState } from 'react'
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from 'react-icons/lu';
import { food_items } from '../pages/food';
import { GiMeat } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice';
import { toast } from 'react-toastify';

function Products({name ,image,price,type,id,qty}) {
    
const dispatch = useDispatch()
   
    
  return (
    
        <div className='w-[250px]  h-[350px] max-sm:w-[180px]  max-sm:h-[290px] max-sm:grid-cols-2 gap-2 shadow-md hover:scale-102 transition-all duration-300  shadow-green-500 bg-white p-2 rounded-md flex flex-col justify-between'>

        
            <div className='w-full h-full'>
                <img className='rounded-md object-cover w-full h-full' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-xl font-semibold max-sm:text-[16px] line-clamp-1'>{name}</h2>
            </div>
            <div className='flex justify-between text-green-500 font-semibold'>
                <p>Rs : {price}/-</p>
                <p className='flex items-center gap-1'>
                    {type === "veg" ? <LuLeafyGreen className='text-green-500'/>: <GiMeat />}
                     {type} 
                    </p>
            </div>
            <div>
                <button className='max-sm:text-[15px] bg-green-300 w-full h-10 rounded-md font-medium cursor-pointer hover:bg-green-500 transition-all duration-300 hover:text-white' onClick={()=>  {dispatch(addItem({id,image,price, name,qty,type})) ; toast.success("Item Added in Cart")}}>Add to Dish</button>
            </div>

        </div>
  )
}

export default Products