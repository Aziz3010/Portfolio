import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (auth.userIsLogged === false) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default RequireAuth;
