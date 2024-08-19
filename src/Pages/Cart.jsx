import React from 'react';
import { useCart } from './CartContext'; // Ensure path is correct

const Cart = () => {
  const cartContext = useCart(); // Access Cart Context

  // Check if useCart is returning undefined
  if (!cartContext) {
    return <div>Error: Cart context is not available</div>;
  }

  const { cartItems } = cartContext;

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;
