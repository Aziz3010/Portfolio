import Axios from "./Axios";
const UpdateUserInfo_URL = "UpdateUserInfo.php";

const config = {
  mode: "no-cors",
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export const updateUserInfoFunc = async (formData) => {
  let { data } = await Axios.post(UpdateUserInfo_URL, formData, config);
  return data;
};
