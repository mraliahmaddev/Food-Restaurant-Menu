import React from 'react'
import image from '../assets/image15.avif'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeItem } from '../Redux/cartSlice'
import { toast } from 'react-toastify'
function CartDetails({name ,image , price , qty ,id }) {
    
const dispatch = useDispatch()    



    
  return (
    <div className='w-full h-full'>
        <div className='flex shadow-md rounded-md  gap-3 items-center justify-between p-2 w-full '>
            <div className='flex gap-3 w-[75%] '>

            <div className='w-[100px] h-[100px] max-sm:w-[100px] max-sm:h-[100px]'>
                <img className='rounded-md object-cover w-full h-full' src={image} alt="" />
            </div>

            <div className='flex flex-col justify-between py-1'>
                <p className='font-semibold max-sm:line-clamp-1 line-clamp-1'>{name}</p>
                <div className='w-[90px]  max-sm:h-[35px] h-[40px] border border-green-500 flex items-center justify-evenly rounded-md overflow-hidden'>
                    <button onClick={()=> dispatch(decrement(id)) } className='text-green-500 text-xl w-8 h-full flex justify-center items-center cursor-pointer'>-</button>
                    <p className=' text-green-500 bg-gray-200 w-8 flex justify-center items-center h-full'>{qty}</p>
                    <button onClick={()=> dispatch(increment(id))} className='text-green-500 text-xl w-8 h-full flex justify-center items-center cursor-pointer'>+</button>
                </div>
            </div>

            </div>
            
            
            <div className='flex flex-col items-end justify-between gap-3'>
                <p className='font-semibold text-green-500 max-sm:text-[12px]'>Rs {price}/-</p>
                <span className=''>
                <MdDelete className='w-8 h-6 text-red-600 cursor-pointer' onClick={()=> {dispatch(removeItem(id))}}/>
                </span>
            </div>
            
        </div>
        
    </div>
  )
}

export default CartDetails