import React, { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart(prev => [...prev, { ...item, quantity }]);
  };

  const removeCartItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
  }

  const resetCartItem = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeCartItem, resetCartItem }}>
      {children}
    </CartContext.Provider>
  );
}