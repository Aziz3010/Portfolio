// const UserInfo_URL = "https://myportfolioapi.rf.gd/UserInfo.php";
const UserInfo_URL = "http://localhost/MyPortfolioAPI/UserInfo.php";

export const userInfoFuncFetch = async () => {
  const option = {
    method: "GET",
    mode: "cors",
    headers: {
      'Content-Type': "application/json; charset=UTF-8",
    },
  };

  const res = await fetch(UserInfo_URL, option);
  const data = await res.json();
  console.log(data);
};
