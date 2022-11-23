import Axios from "./Axios";
const Login_URL = "Login.php";

const config = {
    mode: 'no-cors',
    headers: {
        'Content-Type': "multipart/form-data",
    }
};
export const loginFunc = async (formData) => {
    let { data } = await Axios.post(Login_URL, formData, config);
    return data;
};