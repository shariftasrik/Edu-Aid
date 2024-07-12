import React, { createContext, useState, useEffect } from 'react';
import { course_List } from './Assets/assets'; // Adjust the path as necessary

// Create a context for the cart
const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(null); // Define token state and setToken function
  const url = "http://localhost:4000";

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = course_List.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const cartContextValue = {
    course_List,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token, // Include token in the context value
    setToken // Include setToken in the context value
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
