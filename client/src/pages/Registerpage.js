import { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FetchLoginUser } from "../api/LoginInfoSlice";
import styles from './styles/RegisterPage.module.css'

function Registerpage() {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handelFunction = () => {
    setShow(true);
  };

  useEffect(() => {
    const FetchData = async () => {
      const data = await JSON.parse(localStorage.getItem("username"));
      if (data) {
        setUsername(data);
        dispatch(FetchLoginUser(data));
      }
    };
    FetchData();
  }, [show]);

  return (
    <>
    <div className={styles.container}>
    <div className={styles.form_container}>
    {show ? (
        <>
          <button type="button">
            <Link to={`/profilepage/${username}`}>GO TO YOUR PROFILE PAGE</Link>
          </button>
        </>
      ) : (
        <>
        <h1 className={styles.h1}>CREATE YOUR ACCOUNT</h1>
          <RegisterForm show={handelFunction} />
        </>
      )}
    </div>
    </div>
    
    </>
  );
}

export default Registerpage;
