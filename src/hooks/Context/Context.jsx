import React, { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart(prev => [...prev, { ...item, quantity }]);
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(game => game.id !== itemId);
    setCart(cartUpdated);
  }

  const resetItem = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, resetItem }}>
      {children}
    </CartContext.Provider>
  );
}