import { CiEdit, CiHome, CiLogout, CiUser } from "react-icons/ci";
import { GiLifeSupport } from "react-icons/gi";

import { GrUserAdmin } from "react-icons/gr";
import {
  MdDashboard,
  MdEmail,
  MdManageAccounts,
  MdOutlineApproval,
  MdOutlineContactEmergency,
  MdOutlineFavorite,
  MdOutlineFestival,
} from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useIsAdminOrPremium from "../hooks/useIsAdminOrPremium";

import { FaUsers, FaUsersViewfinder } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { RiContactsLine } from "react-icons/ri";
import Swal from "sweetalert2";
import LoadingSpiner from "../Components/Shared/LoadingSpiner";
import useAlert from "../hooks/useAlert";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const { logout, user, loading } = useAuth();
  const navigate = useNavigate();
  const alert = useAlert();
  const data = useIsAdminOrPremium();
  const { isLoading, isAdmin } = data ? data : {};
  const { displayName, photoURL } = user ? user : {};
  const avatar = photoURL ? photoURL : `${location.origin}/no-avater.jpg`;
  const mainPath = "/dashboard";

  const userItems = [
    {
      id: 1,
      name: "user dashboard",
      path: `${mainPath}/user-home`,
      icon: <CiUser className="text-2xl md:text-2xl " />,
    },
    {
      id: 2,
      name: "edit biodata",
      path: `${mainPath}/edit-biodata`,
      icon: <CiEdit className="text-base md:text-xl" />,
    },
    {
      id: 3,
      name: "view biodata",
      path: `${mainPath}/view-biodata`,
      icon: <FaUsersViewfinder className="text-base md:text-xl" />,
    },
    {
      id: 4,
      name: "My contact requests",
      path: `${mainPath}/my-contact-request`,
      icon: <RiContactsLine className="text-base md:text-xl" />,
    },
    {
      id: 5,
      name: "favourite biodatas",
      path: `${mainPath}/favourite-biodatas`,
      icon: <MdOutlineFavorite className="text-base md:text-xl" />,
    },
    {
      id: 6,
      name: "Got Merried",
      path: `${mainPath}/got-merried`,
      icon: <MdOutlineFestival className="text-base md:text-xl" />,
    },
  ];
  const adminItems = [
    {
      id: 1,
      name: "admin dashboard",
      path: `${mainPath}/admin-home`,
      icon: <GrUserAdmin className=" text-base md:text-xl" />,
    },
    {
      id: 2,
      name: "Manage users",
      path: `${mainPath}/manage`,
      icon: <MdManageAccounts className="text-base md:text-xl" />,
    },
    {
      id: 3,
      name: "approved premium",
      path: `${mainPath}/approvedPremium`,
      icon: <MdOutlineApproval className="text-base md:text-xl" />,
    },
    {
      id: 4,
      name: "approved contact request",
      path: `${mainPath}/approvedContactRequest`,
      icon: <MdOutlineContactEmergency className="text-base md:text-xl" />,
    },
    {
      id: 5,
      name: "success stories",
      path: `${mainPath}/success-stories`,
      icon: <GiLifeSupport className="text-base md:text-xl" />,
    },
  ];

  const commonItems = [
    {
      id: 1,
      name: "home",
      path: `/`,
      icon: <CiHome className="text-xl" />,
    },
    {
      id: 2,
      name: "biodatas",
      path: `/biodatas`,
      icon: <FaUsers className="text-base md:text-xl" />,
    },
    {
      id: 3,
      name: "about us",
      path: `/about`,
      icon: <FcAbout className="text-base md:text-xl" />,
    },
    {
      id: 4,
      name: "contact",
      path: `/contact`,
      icon: <MdEmail className="text-base md:text-xl" />,
    },
  ];

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "If wanna logout, click Ok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
          .then(() => {
            alert("Logged out successfully", "success");
            navigate("/");
          })
          .catch(() => alert("Logged out failed", "error"));
      }
    });
  };

  return (
    <div className="drawer xl:drawer-open capitalize">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content absolute xl:hidden">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className=" btn bg-transparent border-none mt-6 ml-6 md:ml-10 drawer-button xl:hidden hover:bg-transparent fixed z-20 xl:static"
          title="Open Dashboard"
        >
          <MdDashboard className="text-3xl md:text-4xl text-secondary-color bg-transparent " />
        </label>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay opacity-0"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-secondary-color text-base-content font-cinzel xl:fixed">
          {/* Sidebar content here */}
          <li>
            {" "}
            {user && !loading && (
              <div className={`flex flex-col items-center mb-4 md:mb-6 gap-1 `}>
                <div
                  tabIndex={0}
                  className=" mt-2 w-12  rounded-full border cursor-pointer"
                >
                  <img src={avatar} alt="" className=" rounded-full " />
                </div>
                {displayName && (
                  <h3
                    className={` text-sm text-white font-medium text-center hover:bg-transparent`}
                  >
                    {displayName && displayName}
                  </h3>
                )}
              </div>
            )}
          </li>

          {/* user menu items */}
          {isLoading ? (
            <LoadingSpiner />
          ) : !isLoading && isAdmin ? (
            adminItems.map(({ id, name, icon, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-base  ${
                      isActive
                        ? "text-primary-color hover:bg-white hover:bg-opacity-10"
                        : "text-white  hover:bg-white hover:bg-opacity-10"
                    }`
                  }
                >
                  {icon} {name}
                </NavLink>
              </li>
            ))
          ) : (
            userItems.map(({ id, name, icon, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    ` text-base ${
                      isActive
                        ? "text-primary-color hover:bg-white hover:bg-opacity-10"
                        : "text-white  hover:bg-white hover:bg-opacity-10"
                    }`
                  }
                >
                  {icon} {name}
                </NavLink>
              </li>
            ))
          )}

          <li>
            <div>
              <Link
                to="/"
                className="flex flex-col  text-title-color gap-0 items-start mt-6 md:mt-10 mb-3 "
              >
                <img
                  src="https://unity-mates-server.vercel.app/images/logo.png"
                  alt=""
                  className="w-36"
                />
              </Link>
            </div>
          </li>
          {/* common menu items */}
          {commonItems.map(({ id, name, icon, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                className={"text-white  hover:bg-white hover:bg-opacity-10"}
              >
                {icon} {name}
              </NavLink>
            </li>
          ))}
          <li>
            {" "}
            <button
              className="text-white  hover:bg-white hover:bg-opacity-10 text-base  "
              onClick={handleLogout}
            >
              {" "}
              <CiLogout className="text-base md:text-xl" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
