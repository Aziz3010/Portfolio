import { createContext, useContext, useState } from "react";

// create context api
export const AuthContext = createContext(null);

// create provider
export const ContextProvider = ({ children }) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const loginFunc = () => {
    setUserIsLogged(true);
  };
  const logoutFunc = () => {
    setUserIsLogged(false);
  };
  return (
    <AuthContext.Provider value={{ userIsLogged, loginFunc, logoutFunc }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
