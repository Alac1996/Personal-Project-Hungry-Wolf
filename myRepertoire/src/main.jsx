// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import OrderContextProvider from "./context/OrderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <CartContextProvider>
      <OrderContextProvider>
        <App />
      </OrderContextProvider>
    </CartContextProvider>
  </AuthContextProvider>
);
