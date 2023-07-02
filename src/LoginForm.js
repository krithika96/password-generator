import "./styles.css";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setProfile } from "./redux/reducer/profile";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState({ flag: false, message: "" });
  const [login, setLogin] = useState(true);
  let history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ComponentDidMount");
    return () => {
      console.log("ComponentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate");
  }, [userName]);

  const handleSubmit = () => {
    // let message;
    if (!userName) {
      setError({ flag: true, message: "Please enter the user name" });
    } else if (!userName.includes("@") || !userName.includes(".com")) {
      setError({ flag: true, message: "Please enter valid email" });
      // message = "Please enter valid email"
    } else if (userName.includes("@") && userName.includes(".com")) {
      setError({ flag: true, message: "The email is valid and you can login" });
      dispatch(setProfile({ userName: userName, passWord: passWord }));
      setLogin(false);

      history("/profile");
      // message = "The email is valid and you can login"
    }
    // return "";
  };

  // const checkValidPass = () => {};
  return (
    login && (
      <div className="LoginForm">
        <form action="#" method="get">
          <div className="input">
            <div>User : </div>
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="input">
            <div>Password : </div>
            <input
              type="password"
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error.flag && <div>{error.message}</div>}
          <button type="submit" name="Submit" onClick={handleSubmit}>
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    )
  );
}
// export default function LoginForm() {
//   return <div className="">This is the Login Page</div>;
// }
