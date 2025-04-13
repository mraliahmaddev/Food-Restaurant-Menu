import React, { createContext, useState } from 'react'
import { food_items } from '../pages/food'
export const dataContext = createContext()

function UserContext({children}) {
    const [activeCategory, setActiveCategory] = useState("All")
    const [showCart, setShowCart]=useState(false)

    const [input,setInput] = useState("")
    const [cate,setCate] = useState(food_items)

    let data = {
        input,
        setInput,
        cate,
        setCate,
        activeCategory,
        setActiveCategory,
        showCart,
        setShowCart
    }
  return (
    <div>
        <dataContext.Provider value={data}>

        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext