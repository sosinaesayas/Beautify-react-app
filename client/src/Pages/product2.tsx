import React, {useContext, useState} from 'react'
import "./home.css"
import styles from "./shop.module.css"
import { FaHeart } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { ShopContext } from '../context/shopContext'


const Product2 = (props:any) => {
  const [active, setActive] = useState(false);
  const changeHandler = () => {
    setActive(true);
  };

  const { id, productName, price, productImage } = props.data;
  const shopContext = useContext(ShopContext);

  const addToCart = (itemId: number) => {
    if (shopContext) {
      shopContext.addToCart(itemId);
      changeHandler();
    }
  };

  const cartItems = shopContext?.cartItems ?? {};
  const cartItemAmount = cartItems[id];

  return (
           
        <div className='first-images'>   
      

 <div className={styles.imageContainer}>
            <img className={styles.images} src={productImage} alt="cosmetics" />
            <div className={styles.hoverButton1}>
              <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
              <button className={styles.iconButton}><FaEye id='eye-style'/></button>
            </div>
            <div className={styles.hoverButton}>
            <button onClick={() => addToCart(id)} className={`${styles.cartButton} ${active ? styles.activeCartButton : ''}`}>
            Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
            </div>
          </div>
        </div>
  )
}

export default Product2