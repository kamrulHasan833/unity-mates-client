import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import LoadingSpiner from "../Components/Shared/LoadingSpiner";
import useAuth from "../hooks/useAuth";
import useIsAdminOrPremium from "../hooks/useIsAdminOrPremium";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isLoading } = useIsAdminOrPremium();
  if (isLoading || loading) {
    return <LoadingSpiner />;
  } else if (!isLoading && !loading && user && isAdmin) {
    return children;
  }
  return <Navigate to="/" />;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
