import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout } from "./redux/reducer/profile";

const Profile = () => {
  const { userName, passWord, lastLogin } = useSelector(
    (state) => state.profile
  );
  const dispatch = useDispatch();
  const index = lastLogin.findIndex((e) => e.userName === userName);

  return (
    <div>
      <h2>This is your profile section</h2>
      <div className="profile-details">
        <label> User Name : {userName}</label>
        <label> Password : {passWord} </label>
        {index !== -1 && (
          <label>
            {" "}
            Last Login Time : {lastLogin[index].time.toLocaleString()}
          </label>
        )}
        {console.log(typeof lastLogin[index].time)}
      </div>
      <Link
        to="/"
        onClick={() => {
          dispatch(setLogout());
        }}
      >
        Click here to logout{" "}
      </Link>
    </div>
  );
};

export default Profile;
