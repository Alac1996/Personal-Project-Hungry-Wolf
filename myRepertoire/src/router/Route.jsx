import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Layout from "../layout/Layout";

import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import PizzaPage from "../pages/PizzaPage";
import SideDishesPage from "../pages/SideDishesPage";
import BeveragesPage from "../pages/BeveragesPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import PaymentMethodPage from "../pages/PaymentMethodPage";
import QRPage from "../pages/QRPage";
import PaymentCompletePage from "../pages/PaymentCompletePage";
import UserAccountInfoPage from "../pages/UserAccountInfoPage";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <Login />,
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuthenticated>
        <Register />,
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "pizza", element: <PizzaPage /> },
      { path: "sideDish", element: <SideDishesPage /> },
      { path: "beverage", element: <BeveragesPage /> },
      { path: "product/:productId", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "order", element: <OrderPage /> },
      { path: "payment", element: <PaymentMethodPage /> },
      { path: "QR", element: <QRPage /> },
      { path: "paid", element: <PaymentCompletePage /> },
      { path: "account", element: <UserAccountInfoPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
