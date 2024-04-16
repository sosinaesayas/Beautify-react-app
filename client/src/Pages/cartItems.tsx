import React from 'react'
import styles from "./shop.module.css"
import { FaHeart } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { ShopContext } from '../context/shopContext'

const CartItem = (props:any) => {
    
const { id, productName, price, productImage } = props.data;
 return (

    <div>CartItem</div>
  )
}

export default CartItem