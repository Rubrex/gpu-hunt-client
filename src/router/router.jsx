import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import AddProduct from "../components/Dashboard/AddProduct/AddProduct";
import Dashboard from "../components/Dashboard/Dashboard";
import MyBuyers from "../components/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../components/Dashboard/MyOrders/MyOrders";
import MyProducts from "../components/Dashboard/MyProducts/MyProducts";
import MyWishLists from "../components/Dashboard/MyWishLists/MyWishLists";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import MainLayout from "../layout/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellersRoute from "./SellersRoute/SellersRoute";
import UsersRoute from "./UsersRoute/UsersRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  ,
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/myorders",
        element: (
          <UsersRoute>
            <MyOrders />
          </UsersRoute>
        ),
      },
      {
        path: "/dashboard/mywishlists",
        element: (
          <UsersRoute>
            <MyWishLists />
          </UsersRoute>
        ),
      },

      // Seller Routes
      {
        path: "/dashboard/addproduct",
        element: (
          <SellersRoute>
            <AddProduct />
          </SellersRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellersRoute>
            <MyProducts />
          </SellersRoute>
        ),
      },
      {
        path: "/dashboard/mybuyers",
        element: (
          <SellersRoute>
            <MyBuyers />
          </SellersRoute>
        ),
      },
    ],
  },
]);

export default router;
