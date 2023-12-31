import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Checkout from "../Components/Sections/Checkout";
import About from "../Pages/About";
import BiodataDetails from "../Pages/BiodataDetails";
import Biodatas from "../Pages/Biodatas";
import ContactUs from "../Pages/ContactUs";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ApproveCotactRequests from "../Pages/Dashboard/Admin/ApproveCotactRequests";
import ApprovePremiumRequests from "../Pages/Dashboard/Admin/ApprovePremiumRequests";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import SuccesStoryPage from "../Pages/Dashboard/Admin/SeccessStoryPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EditBiodata from "../Pages/Dashboard/User/EditBiodata";
import FavouriteBiodatas from "../Pages/Dashboard/User/FavouriteBiodatas";
import GotMerried from "../Pages/Dashboard/User/GotMerried";
import MyContactRequests from "../Pages/Dashboard/User/MyContactRequests";
import UserHome from "../Pages/Dashboard/User/UserHome";
import ViewBiodata from "../Pages/Dashboard/User/ViewBiodata";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
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
        element: (
          <PrivateRoute>
            <BiodataDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <NotFound />,
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
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-home",
        element: (
          <PrivateRoute>
            <UserHome />
          </PrivateRoute>
        ),
      },
      // user Routes
      {
        path: "my-contact-request",
        element: (
          <PrivateRoute>
            <MyContactRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-biodata",
        element: (
          <PrivateRoute>
            <EditBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "view-biodata",
        element: (
          <PrivateRoute>
            <ViewBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "favourite-biodatas",
        element: (
          <PrivateRoute>
            <FavouriteBiodatas />
          </PrivateRoute>
        ),
      },
      {
        path: "got-merried",
        element: (
          <PrivateRoute>
            <GotMerried />
          </PrivateRoute>
        ),
      },

      // admin routes
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "approvedContactRequest",
        element: (
          <AdminRoute>
            <ApproveCotactRequests />
          </AdminRoute>
        ),
      },
      {
        path: "approvedPremium",
        element: (
          <AdminRoute>
            <ApprovePremiumRequests />
          </AdminRoute>
        ),
      },
      {
        path: "success-stories",
        element: (
          <AdminRoute>
            <SuccesStoryPage />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
