import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserInfoDisplay from "../components/Userinfo";
import ProfilePageNavBar from "../components/PofilePageNavBar";
import ProfilePageSideBar from "../components/ProfilePageSideBar";
import { FetchLoginUser } from "../api/LoginInfoSlice";
import { Link } from "react-router-dom";
import styles from "./styles/ProfilePage.module.css";

function Profilepage() {
  const dispatch = useDispatch();
  const { statuslogin, errorlogin } = useSelector((state) => state.logininfo);
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
        {errorlogin && (
          <>
            <h2>Error: Server Users error</h2>
            <Link to="/" />
          </>
        )}
        {statuslogin === "resolved" ? (
          <>
            <ProfilePageNavBar />
            <div className={styles.flex_container_row}>
              <ProfilePageSideBar />
              <UserInfoDisplay />
            </div>
          </>
        ) : (
          <>
            {statuslogin === "loading" && <h1>User information Loading...</h1>}
            {errorlogin && (
              <>
                <h2>Error: Server Users error</h2>
                <Link to="/" />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Profilepage;
