import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.get("/cart/getCartItem");
      setCartItem(res.data.targetCartItem);
    };
    fetchCart();
  }, []);

  const updateCart = async (cart) => {
    await axios.post("/cart/createCart", cart);
    const res = await axios.get("/cart/getCartItem");
    setCartItem(res.data.targetCartItem);
  };

  const removeCartItem = async (product_Name, crust, size) => {
    try {
      // Send a DELETE request to the server to remove the item from the cart
      await axios.delete(
        `/cart/deleteCartItem/?product_Name=${product_Name}&crust=${crust}&size=${size}`
      );

      // Fetch the updated cart data after deletion
      const updatedCartData = await axios.get("/cart/getCartItem");
      setCartItem(updatedCartData.data.targetCartItem);
    } catch (error) {
      console.error("Error removing cart item", error);
      // Handle the error as needed
    }
  };

  console.log("cartItem:", cartItem);

  return (
    <CartContext.Provider value={{ updateCart, removeCartItem, cartItem }}>
      {children}
    </CartContext.Provider>
  );
}
