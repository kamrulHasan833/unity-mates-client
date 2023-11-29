import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Checkout from "../Components/Sections/Checkout";
import BiodataDetails from "../Pages/BiodataDetails";
import Biodatas from "../Pages/Biodatas";
import ApproveCotactRequests from "../Pages/Dashboard/Admin/ApproveCotactRequests";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import Landing from "../Pages/Dashboard/Common/Landing";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyContactRequests from "../Pages/Dashboard/User/MyContactRequests";
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <Landing /> },
      // user Routes
      {
        path: "my-contact-request",
        element: <MyContactRequests />,
      },

      // admin routes
      { path: "manage", element: <ManageUsers /> },
      { path: "approvedContactRequest", element: <ApproveCotactRequests /> },
    ],
  },
]);
export default router;
