import { createContext, useState } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [userOrders, setUserOrders] = useState([]);

  const addOrder = (order) => {
    setUserOrders((prevOrder) => [...prevOrder, order]);
  };

  return (
    <OrderContext.Provider value={{ userOrders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
