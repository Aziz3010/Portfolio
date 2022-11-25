const UserInfo_URL = "https://myportfolioapi.rf.gd/UserInfo.php";
// const UserInfo_URL = "http://localhost/MyPortfolioAPI/UserInfo.php";

export const userInfoFuncFetch = async () => {
  let res = await fetch(UserInfo_URL, {
    method: "GET",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  });
  let data = await res.json();
  console.log(data);
};