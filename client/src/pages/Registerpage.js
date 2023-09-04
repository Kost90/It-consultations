import { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchLoginUser } from "../api/LoginInfoSlice";
import Loader from "../components/Loader/Loader";
import styles from './styles/RegisterPage.module.css'

function Registerpage() {
  const [username, setUsername] = useState("");
  const {LoginUser, statuslogin, errorlogin } = useSelector((state) => state.logininfo);
  const {users, status} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() =>{
    const data = JSON.parse(localStorage.getItem("username"));
    if(status === 'resolved'){
      console.log(data)
      setUsername(data);
    }
  }, [users])
  

  useEffect(() => {
    const FetchData = async () => {
      console.log(LoginUser);
      if (LoginUser.username === username) {
        console.log('start')
        const info = await dispatch(FetchLoginUser(username));
        return info
      }
    };
    FetchData();
  }, [username]);

  return (
    <>
    <div className={styles.container}>
    <div className={styles.form_container}>
    {statuslogin === "loading" && <Loader/>}
    {statuslogin === 'resolved' ? (
        <>
        {errorlogin && <h2>Error: Server error</h2>}
          <button type="button" className={styles.button_register_page}>
            <Link to={`/profilepage/${username}`}>GO TO YOUR PROFILE PAGE</Link>
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
    
    </>
  );
}

export default Registerpage;
