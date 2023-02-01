import { createBrowserRouter } from "react-router-dom";
import Cart from "../Cart/Cart";
import FAQ from "../FAQ/FAQ";
import Home from "../Home";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import Main from "../Main";
import OrderAdmin from "../Pages/OrderAdmin/OrderAdmin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/orderadmin",
        element: <OrderAdmin></OrderAdmin>,
      },
    ],
  },
]);
