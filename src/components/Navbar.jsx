import React, { useContext, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { LuShoppingBag } from 'react-icons/lu'
import { MdFastfood } from 'react-icons/md'
import { dataContext } from '../context/UserContext'
import { food_items } from '../pages/food'
import { useSelector } from 'react-redux'

function Navbar() {

    const cartLength = useSelector(state => state.cart)
    
    

    const {input,setInput,cate,setCate,showCart,setShowCart} = useContext(dataContext)

    useEffect(() => {
      let newlist = food_items.filter(item => item.food_name.toLocaleLowerCase().includes(input))
        setCate(newlist)
      
    }, [input])
    

  return (
    <div  className='w-full h-24  px-3 flex justify-between items-center max-sm:gap-1'>
        <div className='w-15 bg-white h-15 flex justify-center items-center shadow-xl rounded-md'>
        <MdFastfood className='text-3xl text-green-500'/>
        </div>

        <form onSubmit={(e)=> e.preventDefault()} className='w-[60%] bg-white relative h-15 flex items-center shadow-xl rounded-md'>
            <input  onChange={(e)=> setInput(e.target.value) } value={input} type="text" placeholder='search items...' className='w-full outline-none p-4'/>
            <FaSearch className='absolute right-5 text-2xl text-green-500'/>
        </form>

        <div onClick={()=> setShowCart(true)} className='w-15 bg-white h-15 flex cursor-pointer justify-center items-center shadow-xl rounded-md relative'>
        <LuShoppingBag className='text-3xl text-green-500'/>
        <span className='absolute text-green-500 font-bold text-[13px] top-0 right-1.5'>{cartLength.length ? cartLength.length : ""}</span>
        </div>
    </div>
  )
}

export default Navbar