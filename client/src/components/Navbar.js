import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchLoginUser, DeleteLoginUser } from "../api/LoginInfoSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Navbar.module.css";

let user = {};

const Navbar = () => {
  const dispatch = useDispatch();
  const { LoginUser, statuslogin, errorlogin } = useSelector(
    (state) => state.logininfo
  );

  if (Array.isArray(LoginUser)) {
    user = LoginUser[0];
  } else {
    user = LoginUser;
  }

  useEffect(() => {
    const FetchData = async () => {
      const data = await JSON.parse(localStorage.getItem("username"));
      if (data) {
        dispatch(FetchLoginUser(data));
      }
    };
    FetchData();
  }, [dispatch]);

  const HandelClick = (id) => {
    dispatch(DeleteLoginUser(id));
    localStorage.clear();
    user = {};
    window.location.reload();
  };

  console.log(user);

  return (
    <div className={styles.navbar}>
      <div className={styles.navBarContainer}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faPeopleGroup}  className={styles.logo_nav_bar}/>
          <span>
            <Link to="/" className={styles.routerLink}>
              Triple Consult
            </Link>
          </span>
        </div>
        <div className={styles.flex_container_navbar_button}>
          {user !== undefined ? (
            <>
              <button className={styles.button_navbar}>
                <Link to={`/profilepage/${user.username}`}>Profile</Link>
              </button>
              <button
                type="button"
                onClick={() => {
                  HandelClick(user.id);
                }}
                className={styles.button_navbar}
              >
                <Link to="/">Logout</Link>
              </button>
            </>
          ) : (
            <>
            <button className={styles.button_navbar}>
            <Link to="/register">Register</Link>
            </button>
            <button className={styles.button_navbar}>
              <Link to="/loginpage">Login</Link>
            </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
