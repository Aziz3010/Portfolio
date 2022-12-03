import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userInfoFunc } from "../API/UserInfo";
import { useAuth } from "./Auth";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const locationURL = useLocation();
  const PATHNAME = locationURL.pathname;
  const navigate = useNavigate();
  const userInfo = async () => {
    const user = await userInfoFunc();
    const data = user[0].accessToken;
    return data;
  };
  useEffect(() => {
    const compareTokens = async () => {
      const dbToken = await userInfo();
      const access_token_session = JSON.parse(
        sessionStorage.getItem("access_token")
      );
      if (access_token_session !== dbToken) {
        sessionStorage.removeItem("access_token");
        auth.logoutFunc();
        navigate("/login", { replace: true });
        toast.error("You aren't login");
      }
    };
    compareTokens();
  }, [PATHNAME,auth,navigate]);

  if (auth.userIsLogged === false) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default RequireAuth;
