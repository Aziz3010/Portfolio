import Axios from "./Axios";
const UserInfo_URL = "/UserInfo.php";

const config = {
    headers: {
        'Content-Type': "application/json; charset=UTF-8",
    },
};
export const userInfoFunc = async () => {
    let { data } = await Axios.get(UserInfo_URL, config);
    return data;
};