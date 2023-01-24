import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import Main from "../Main";

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
    ],
  },
]);
