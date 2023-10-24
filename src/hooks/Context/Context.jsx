import React, { useEffect, createContext, useState } from 'react';

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (game, quantity) => {
    setCart(prev => [...prev, { ...game, quantity }]);
  };

  const removeItem = (gameId) => {
    const cartUpdated = cart.filter(item => item.game.id !== gameId);
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