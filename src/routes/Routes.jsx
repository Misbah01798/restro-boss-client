import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../pages/menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'singUp',
          element:<SignUp></SignUp>
        }

    ]
    },
    
  ]);
