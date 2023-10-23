import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

  const [item, setItem] = useState(0);

  const addCartItem = () => {
      setItem(item + 1);
  };

  const removeCartItem = () => {
      if (item > 0) {
          setItem(item - 1);
      }
  }

  const resetCartItem = () => {
      setItem(0);
  }

  return (
    <CartContext.Provider value={{ item, addCartItem, removeCartItem, resetCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}