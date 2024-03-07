//hookusecontext
import {  createContext, useState } from "react";
import { ShopContextProps } from "./type";
//create contect
export const ShopContext = createContext(null);

//tarife provider 
export const   ShopContextProvider =(props)=>{
   const [cartItems, setCartItems] = useState<ShopContextProps>([])

   const  addToCart = (itemId) => {
      if(!cartItems?.find((item)=> item.id === itemId))
      setCartItems([...cartItems , {id : itemId , count : 1}])
      else
      setCartItems(cartItems.map((item)=>{
         if(item.id=== itemId)
         return{...item , count : item.count + 1}
         else return item
      }))
    }

   const removeFromCart =(itemId) => {
      setCartItems(cartItems.map ((i)=>{
         if(i.id=== itemId)
         return{...i , count : i.count === 0 ? 0 : i.count - 1}
         else return i
      }))
   }

   //data ke mikhaiem baine component ha be ashtarake gozashte bashe 
   const contextValue = {cartItems, addToCart, removeFromCart}
   return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
 }
//children harshizie baine tagha ke hast gharae bade 