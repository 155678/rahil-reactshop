import React, { useContext } from 'react'
import { type FC } from 'react'
import { Products } from '../../data/product/Products'
import { ShopContext } from './../../context/shopContext';
import Product from '../shop/Product';

const Cart: FC = () => {
  const {cartItems} = useContext(ShopContext)
  return (
      <React.Fragment>
        <h1 className="text-center text-2xl text-blue-600 font-bold m-2">Your Cart Items</h1>
        <div className="flex ml-20 m-4">
           {Products.map((p)=>{
              if(cartItems.some((i)=>i.id===p.id && i.count >0))
              return <Product data={p}></Product>
           })}
        </div>
      </React.Fragment>
    )
}

export default Cart
