import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import styles from "../Pages/shop.module.css"


const ImageWithButtons = ({ src = {}, alt = {}  }) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={""} alt={""} />
      {showButtons && (
          <div className={styles.hoverButton1}>
          <button className={styles.iconButton}><FaHeart id='heart-style' /></button>
          <button className={styles.iconButton}><FaEye id='eye-style'/></button>
        </div>
        
        ) 
      //   &&
      //    (
      //    <div className={styles.hoverButton}>
      //    <button className={styles.cartButton}>Add to cart</button>
      //  </div>
      // )
      }
    </div>
  );
};

export default ImageWithButtons;