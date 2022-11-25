import Axios from "./Axios";
const AllProjects_URL = "AllProjects.php";

const config = {
    mode: 'no-cors',
    headers: {
        'Content-Type': "application/json; charset=UTF-8",
    },
};
export const allProductFunc = async () => {
    let { data } = await Axios.get(AllProjects_URL, config);
    return data;
};