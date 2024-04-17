import React from 'react'
import "./cartItems.css"
const CartItem = (props:any) => {
  const {id,productImage, productName, price} = props.data
  return (
    <div className='cartItems'>
    
      <img src={productImage}/>
      <div className='description'>
        <p>
          {""}
          <b>{productName}</b>
        </p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default CartItem