import React, { createContext, useState } from "react";
import Products from "../Pages/products";

interface ShopContextType {
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  [key: number]: any; 
}

export const ShopContext = createContext<ShopContextType | null>(null);

// const getDefaultCart = () => {
//   let cart: { [key: number]: number } = {};
//   for (let i = 0; i < Products.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

const getDefaultCart = () => {
  let cart: { [key: number]: number } = {};
  Products.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};


export const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue: ShopContextType = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue as ShopContextType}>
      {props.children}
    </ShopContext.Provider>
  );
};