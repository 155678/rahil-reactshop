import React from 'react'
import { type FC } from 'react'
import { Products } from '../../data/product/Products'
import  Product  from './Product'
import { ProductsProps } from '../../data/product'

const Shop: FC<ProductsProps> = () => {
  return (
   <React.Fragment>
     <h1 className="text-center text-2xl text-blue-600 font-bold m-2">Shop</h1>
     <div className="flex justify-between m-4">
       {Products.map((productData) => <Product key={productData.id}  data={productData} />       
       )}
     </div>
   </React.Fragment>
  )
}

export default Shop
