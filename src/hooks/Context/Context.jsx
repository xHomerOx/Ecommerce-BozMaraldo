import React, { useEffect, createContext, useState, useMemo } from 'react';

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const totalQuantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
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
    <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, resetItem }}>
      {children}
    </CartContext.Provider>
  );
}