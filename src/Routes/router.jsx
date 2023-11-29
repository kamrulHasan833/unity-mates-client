import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Checkout from "../Components/Sections/Checkout";
import BiodataDetails from "../Pages/BiodataDetails";
import Biodatas from "../Pages/Biodatas";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/biodatas",
        element: <Biodatas />,
      },
      {
        path: "/biodata-details/:id",
        element: <BiodataDetails />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);
export default router;
