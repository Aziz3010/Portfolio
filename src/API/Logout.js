import Axios from "./Axios";
const Logout_URL = "Logout.php";

const config = {
    mode: 'no-cors',
    headers: {
        'Content-Type': "multipart/form-data",
    }
};
export const LogoutFunc = async (formData) => {
    let { data } = await Axios.post(Logout_URL, formData, config);
    return data;
};