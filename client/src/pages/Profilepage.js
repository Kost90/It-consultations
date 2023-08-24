import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserInfoDisplay from "../components/Userinfo";
import ProfilePageNavBar from '../components/PofilePageNavBar';
import { FetchLoginUser } from "../api/LoginInfoSlice";
import LoginForm from "../components/LoginForm";
import styles from "./styles/ProfilePage.module.css";

function Profilepage() {
  const dispatch = useDispatch();
  const { LoginUser, statuslogin, errorlogin } = useSelector(
    (state) => state.logininfo
  );
  const { username } = useParams();

  useEffect(() => {
    const FetchData = async () => {
      const data = await dispatch(FetchLoginUser(username));
      return data;
    };
    FetchData();
  }, [dispatch]);

  return (
    <>
      <div className={styles.flex_container}>
        {statuslogin === "loading" && <h2>User information Loading...</h2>}
        {errorlogin && <h2>Error: Server Users error</h2>}
        {LoginUser.length !== 0 ? (
          <>
          <ProfilePageNavBar/>
            <UserInfoDisplay />
          </>
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </div>
    </>
  );
}

export default Profilepage;
