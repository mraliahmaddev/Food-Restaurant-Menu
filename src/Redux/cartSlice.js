import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

    name : "cartSlice",
    initialState : [],
    reducers : {
        addItem : (state,action)=>{
            let existedItem = state.find(item => (item.id === action.payload.id))
            if (existedItem) {
                return state.map(item =>( item.id === action.payload.id) ? {...item, qty : item.qty + 1}: item )
            }else{

                state.push(action.payload)
            }
            
           
           
            
                
            
        },
        removeItem :(state,action) => {
          return  state.filter(item => item.id !== action.payload)
        },

        increment : (state,action)=>{
            
            
            return state.map((item) =>( item.id === action.payload) ? {...item, qty : item.qty + 1}: item )
        },
        decrement : (state,action)=>{
            const item = state.find((item) => item.id === action.payload);
            if (item && item.qty > 1) item.qty -= 1;
        },
        orderPlaced : (state,action)=>{
           return state = action.payload
        }


    }
})

export const {addItem,removeItem,increment,decrement,orderPlaced} = cartSlice.actions

export default cartSlice.reducer