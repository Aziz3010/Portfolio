import { createContext, useContext, useState } from "react";

// create context api
export const AuthContext = createContext(null);

// create provider
export const ContextProvider = ({ children }) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const loginFunc = () => {
    setUserIsLogged(true);
    // console.log("login");
  };
  const logoutFunc = () => {
    setUserIsLogged(false);
    // console.log("logout");
  };
  // console.log(userIsLogged);
  return (
    <AuthContext.Provider value={{ userIsLogged, loginFunc, logoutFunc }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
