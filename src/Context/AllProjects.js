import { createContext, useContext } from "react";
import Axios from "../API/Axios";

// create context api
export const AllProjectsContext = createContext(null);

const AllProjects_URL = "AllProjects.php";
const config = {
    mode: 'no-cors',
    headers: {
        'Content-Type': "application/json; charset=UTF-8",
    },
};

// create provider
export const AllProjectsContextProvider = ({ children }) => {
  const getProjectsFromApi = async () => {
    const {data} = await Axios.get(AllProjects_URL, config);
    return data;
  };
  return (
    <AllProjectsContext.Provider value={{ getProjectsFromApi }}>
      {children}
    </AllProjectsContext.Provider>
  );
};

export const useAllProjectsContext = () => {
  return useContext(AllProjectsContext);
};
