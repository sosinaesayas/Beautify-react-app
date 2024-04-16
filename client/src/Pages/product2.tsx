import React from 'react'
import "./home.css"
import styles from "./shop.module.css"
import { FaHeart } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

const Product2 = (props:any) => {
    const {id, producName, price, productImage} = props.data
  return (
           
        <div className='first-images'>   
        {/* <div className='imagelist'>
        <img className='image' src={productImage} alt='chapstick'/>
        </div> */}

 <div className={styles.imageContainer}>
            <img className={styles.images} src={productImage} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
                <button className={styles.cartButton}>Add to cart</button>
            </div>
          </div>
        </div>
  )
}

export default Product2