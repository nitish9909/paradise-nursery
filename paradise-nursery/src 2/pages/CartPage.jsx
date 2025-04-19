import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, updateQty, deleteItem } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div>
                  <button onClick={() => updateQty(item.id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)}>+</button>
                  <button onClick={() => deleteItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <Link to="/products"><button>Continue Shopping</button></Link>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
