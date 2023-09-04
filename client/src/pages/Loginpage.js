import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import { FetchLoginUser } from "../api/LoginInfoSlice";
import Loader from "../components/Loader/Loader";
import styles from "./styles/LoginPage.module.css";

function Loginpage() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { LoginUser, statuslogin, errorlogin } = useSelector(
    (state) => state.logininfo
  );

  const handelFunction = (data) => {
    setUsername(data);
  };

  useEffect(() => {
    const FetchData = async () => {
      console.log(LoginUser);
      console.log(username);
      if (LoginUser.username === username) {
        console.log("start");
        const info = await dispatch(FetchLoginUser(username));
        return info;
      }
    };
    FetchData();
  }, [username]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <h1>SIGN IN</h1>
          {statuslogin === "loading" && <Loader/>}
          {statuslogin === "resolved" ? (
            <>
              {errorlogin && <h2>Error: Server error</h2>}
              <div className={styles.flex_container}>
                <h1>LOGIN IS SUCCESSFUL</h1>
                <button type="button" className={styles.button}>
                  <Link to={`/profilepage/${username}`}>
                    GO TO YOUR PROFILE PAGE
                  </Link>
                </button>
              </div>
            </>
          ) : (
            <LoginForm username={handelFunction} />
          )}
        </div>
      </div>
    </>
  );
}

export default Loginpage;
