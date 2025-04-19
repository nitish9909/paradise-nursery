import { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existing = cartItems.find(p => p.id === item.id);
    if (existing) {
      setCartItems(cartItems.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const updateQty = (id, delta) => {
    setCartItems(cartItems.map(p =>
      p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p
    ));
  };

  const deleteItem = (id) => {
    setCartItems(cartItems.filter(p => p.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQty, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
