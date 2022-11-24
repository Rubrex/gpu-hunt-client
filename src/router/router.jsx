import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout/MainLayout";

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
]);

export default router;
