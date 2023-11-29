import useIsAdminOrPremium from "../../../hooks/useIsAdminOrPremium";
import AdminHome from "../Admin/AdminHome";
import UserHome from "../User/UserHome";

const Landing = () => {
  const data = useIsAdminOrPremium();
  const isAdmin = data?.isAdmin;

  return <>{isAdmin ? <AdminHome /> : <UserHome />}</>;
};

export default Landing;
