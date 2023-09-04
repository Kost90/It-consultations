import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserInfoDisplay from "../components/Userinfo";
import ProfilePageSideBar from "../components/ProfilePageSideBar";
import { FetchLoginUser } from "../api/LoginInfoSlice";
import { Link } from "react-router-dom";
import Loader from '../components/Loader/Loader'
import styles from "./styles/ProfilePage.module.css";

function Profilepage() {
  const [contacus,setContactUs] = useState(false);
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

  const HandelToggel = () => {
    setContactUs((state) => !state);
  }


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
            <div className={styles.flex_container_row}>
              <ProfilePageSideBar setContactUs={HandelToggel} contactUs={contacus} />
              <UserInfoDisplay contactUs={contacus}/>
            </div>
          </>
        ) : (
          <>
            {statuslogin === "loading" && <Loader/>}
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
