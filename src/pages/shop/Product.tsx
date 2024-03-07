
import { useContext, type FC } from 'react'
import { ProductsProps } from '../../data/product'
import { ShopContext } from '../../context/shopContext'
 const Product: FC<ProductsProps> = (props) => {
  const {id, productName, productImage, price} = props.data;
  //varible taghire kone dar haine rander kardan  mohtavie  jadied dashte bashiem bayed az state estafade koniem
  const {cartItems , addToCart , removeFromCart} = useContext(ShopContext)

  const isInCart = cartItems?.some((item)=> item.id === id)
  return (
    <div className="col-span-4">
        <img src={productImage} className="w-48 h-48 m-4 p-4 " />
        <h5 className="text-center text-blue-600 text-lg font-bold">{productName}</h5>
        <p className="text-center p2 m-2">price : {price}$</p>
        <div className="flex ml-20 mt-2">  
          <button className="size-6 bg-blue-600 rounded text-white" onClick={()=>addToCart(id)}>+</button>
           <span className="mx-1">{cartItems?.filter((i)=> i.id ===id)[0]?.count}</span>
          {isInCart &&<button className="size-6 bg-blue-600 rounded  text-white" onClick={()=>removeFromCart(id)}>-</button>}
        </div>
    </div>
  )
}

export default Product
