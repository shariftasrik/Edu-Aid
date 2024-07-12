import React from 'react';
import { useCart } from '../CartContext'; // Adjust path as needed
import '../css/cart.css';

const Cart = () => {
  const { cartItems } = useCart(); // Access cartItems from context

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
