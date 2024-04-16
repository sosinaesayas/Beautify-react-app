import React, { useContext } from 'react'
import "./cart.css"
import Products from './products'
import CartItem from './cartItems'
import { ShopContext } from '../context/shopContext'


const Cart = () => {
  const cartItems = useContext(ShopContext)
  return (
    <div>

        <div>
          <h1 className='cart-title'>your cart Items</h1>
        </div>

        <div>
          {Products.map((product)=>{
            if (cartItems[product.id] != 0){
              return <CartItem data = {product}/>
            }
          })}
        </div>

    </div>
  )
}

export default Cart;