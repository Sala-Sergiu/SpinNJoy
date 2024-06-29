import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import RequireAuth from "./RequireAuth";
import Orders from "../../features/orders/Orders";
import CheckOutWrapper from "../../features/checkout/CheckOutWrapper";
import Inventory from "../../features/admin/Inventory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "catalog/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "server-error",
        element: <ServerError />,
      },
      {
        path: "not-found",
        element: <NotFound />,
      },
      {
        path: "basket",
        element: <BasketPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <Navigate replace to="not-found" />,
      },
      // authenticated routes
      {
        element: <RequireAuth />,
        children: [
          {
            path: "checkout",
            element: <CheckOutWrapper />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          // admin route included in authenticated routes
          {
            path: "inventory",
            element: <RequireAuth roles={["Admin"]} />,
            children: [
              {
                path: "",
                element: <Inventory />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
