import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import { FetchLoginUser } from "../api/LoginInfoSlice";
import styles from './styles/LoginPage.module.css'

function Loginpage() {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {statuslogin, errorlogin } = useSelector((state) => state.logininfo);

  const handelFunction = () => {
    setShow(true);
  };

  useEffect(() => {
    const FetchData = async () => {
      const data = await JSON.parse(localStorage.getItem("username"));
      if (data) {
      setUsername(data);
      const info = await dispatch(FetchLoginUser(data));
      return info
      }
    };
    FetchData();
  }, [show]);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.form_container}> 
      <h1>SIGN IN</h1>
      {statuslogin === "loading" && <h1>Loading...</h1>}
      {statuslogin === 'resolved' ? (
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
        <LoginForm show={handelFunction} />
      )}
      </div>
    </div>
    </>
  );
}

export default Loginpage;
