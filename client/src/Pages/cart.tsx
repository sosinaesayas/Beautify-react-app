import React, { useContext } from 'react'
import "./cart.css"
import Products from './products'
import CartItem from './cartItems'
import { ShopContext } from '../context/shopContext'


const Cart = () => {
  const cartItems = useContext(ShopContext)

  console.log('Products:', Products);

  // Log the cartItems context
  console.log('cartItems:', cartItems);
  return (
    <div>

      <h1>Your cart Items</h1>

  {/* <div>
          {Products.map((product)=>{
            if (cartItems?.[product.id] !== 0) {
              return <CartItem data={product} />;
          }
          })} 
        </div> */}

<div>
  {Products.filter(product => cartItems !== null && cartItems[product.id] !== undefined && cartItems[product.id] !== 0)
           .map(product => <CartItem data={product} />)}
</div>





      
    </div>
  )
}

export default Cart;