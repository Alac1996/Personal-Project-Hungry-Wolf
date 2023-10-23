import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Layout from "../layout/Layout";

import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import CategoryPage from "../pages/CategoryPage";
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
      { path: "product/:productId", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "order", element: <OrderPage /> },
      { path: "payment", element: <PaymentMethodPage /> },
      { path: "QR", element: <QRPage /> },
      { path: "paid", element: <PaymentCompletePage /> },
      { path: "account", element: <UserAccountInfoPage /> },
      { path: "/:category", element: <CategoryPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
