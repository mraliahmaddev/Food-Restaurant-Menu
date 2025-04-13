import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Categories from './CategoryList'
import Products from '../components/Products'
import { food_items } from './food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from 'react-icons/rx'
import CartDetails from '../components/CartDetails'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { orderPlaced } from '../Redux/cartSlice'

function Home() {

  const {cate,setCate,input,setActiveCategory,activeCategory,showCart,setShowCart} = useContext(dataContext)
  const cartItems = useSelector(state => state.cart)
  
  const dispatch = useDispatch()

 
  function filter(category) {
    setActiveCategory(category)
    if (category === "All") {
      setCate(food_items)
    }else{
      let newList = food_items.filter(item => item.food_category === category)
      setCate(newList)
    }
  }
 
let subTotal = cartItems.reduce((total ,items)=> total + items.price * items.qty,0)
let deliveryCharges = 100
let taxes = Math.floor(subTotal * 0.5/100)
let total = Math.floor(subTotal + deliveryCharges + taxes)

  
  return (
    <div className={`w-full  bg-gray-200 relative`}>
        <Navbar/>

        {input ? null :
        <div className='flex w-full justify-center gap-3.5 flex-wrap'>
            {
                Categories.map((item,i) => (
                  <div key={i} className='bg-white rounded-md cursor-pointer'>

                    <div  onClick={()=> filter(item.name)} className={`flex justify-center items-center flex-col-reverse  w-[110px] h-[115px] font-medium shadow-xl rounded-md hover:bg-green-200 duration-300 ${activeCategory === item.name ? " bg-green-200" : "bg-none"}` }>
                        {item.name}
                        {item.icon}
                    </div>
                  </div>
                ))
            }
        </div>
        }
           
        <div className='flex justify-center w-full h-full'>
          {cate.length > 0 ? 
            <div className='w-[80%] h-full flex flex-wrap justify-center gap-4 my-7 '>
              {
                  cate.map((items,i) =>(
                    <Products key={i} name={items.food_name} image={items.food_image} price={items.price} qty={items.food_quantity} id={items.id} type={items.food_type}/>

                  ))
              }
            
          </div>
          :
          <div className='text-green-500 text-xl font-semibold w-full  flex justify-center items-center h-[200px] '>No Dish Found</div>
          }
        </div> 

      <div onClick={()=> setShowCart(false)}  className={` w-full duration-100 h-screen fixed top-0 ${showCart ? "bg-black  opacity-40" : "hidden"}`}>
      </div>

        <div className={`max-sm:w-full max-md:w-[50%] max-lg:w-[50%] h-full w-[35%]  bg-white overflow-y-scroll fixed right-0 top-0  shadow-xl transition-all duration-300  ${showCart ? "translate-x-0" : "translate-x-full"}`}>
          <div className='flex justify-between py-3 w-full items-center sticky top-0 z-20 bg-white px-3'>
            <p className='text-green-500 font-semibold text-xl'>Order Items</p>
            <span onClick={()=> setShowCart(false)}>
              <RxCross2 className='text-2xl'/>
            </span>
          </div>
          {cartItems.length > 0 ? 
          <div className='flex flex-col gap-3 px-3 '>

              {
                cartItems.map((items,i) => (
                 
                  
                  <CartDetails key={i} name={items.name} image={items.image} price={items.price} id={items.id} qty={items.qty} />
                ))
              }

          <div className='py-4 flex flex-col gap-2 '>
            <hr />
            <div className='flex justify-between'>
                <p className='text-green-500 font-semibold'>Subtotal</p>
                <p className='font-semibold text-gray-600'>Rs {subTotal}/-</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-green-500 font-semibold'>Delivery Charges</p>
                <p className='font-semibold text-gray-600'>Rs {deliveryCharges}/-</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-green-500 font-semibold'>Taxes</p>
                <p className='font-semibold text-gray-600'>{taxes}%</p>
            </div>
          
            <hr />
            <div className='flex justify-between'>
                <p className='text-green-500 font-semibold'>Total</p>
                <p className='font-semibold text-gray-600'>Rs {total}/-</p>
            </div>
            <button className='bg-green-300 w-full h-10 rounded-md font-medium cursor-pointer hover:bg-green-500 transition-all duration-300 hover:text-white' onClick={()=> {{dispatch(orderPlaced([]));toast.success("Order Placed")}}}>Place Order</button>
        </div>
          </div>
          : 
          <div className='text-green-500 text-xl justify-center flex items-center h-full font-semibold'>Empty Cart</div>
          }

        </div> 



    </div>
    
  )
}

export default Home