import { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Loader from "../components/Loader/Loader";
import styles from "./styles/RegisterPage.module.css";

function Registerpage() {
  const [username, setUsername] = useState("");
  const { statuslogin, errorlogin } = useSelector((state) => state.logininfo);
  const { users, status } = useSelector((state) => state.users);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("username"));
    setUsername(data);
  }, [users]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_container}>
          {statuslogin === "loading" && <Loader />}
          {users.length !== 0 ? (
            <>
              {errorlogin && <h2>Error: Server error</h2>}
              <button type="button" className={styles.button_register_page}>
                <Link to={`/profilepage/${username}`}>
                  GO TO YOUR PROFILE PAGE
                </Link>
              </button>
            </>
          ) : (
            <>
              <h1 className={styles.h1}>CREATE YOUR ACCOUNT</h1>
              <RegisterForm />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Registerpage;
