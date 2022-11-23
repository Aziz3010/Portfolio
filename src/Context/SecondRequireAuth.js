import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const SecondRequireAuth = ({ children }) => {
  const auth = useAuth();
  if (auth.userIsLogged === true) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return children;
};

export default SecondRequireAuth;
