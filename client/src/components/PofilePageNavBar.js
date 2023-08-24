import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteLoginUser } from "../api/LoginInfoSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/ProfilePageNAvBAr.module.css";

let user = {};

const ProfilePageNavBar = () => {
  const dispatch = useDispatch();
  const { LoginUser} = useSelector(
    (state) => state.logininfo
  );

  if (Array.isArray(LoginUser)) {
    user = LoginUser[0];
  } else {
    user = LoginUser;
  }

  const HandelClick = (id) => {
    dispatch(DeleteLoginUser(id));
    localStorage.clear();
    user = {};
    window.location.reload();
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navBarContainer}>
        <div className="logo">
          <FontAwesomeIcon icon={faPeopleGroup} />
          <span>
            <Link to="/" className="routerLink">
              Triple Consult
            </Link>
          </span>
        </div>
        <div className={styles.flex_container_profilenavbar_button}>
          {user !== undefined ? (
            <>
              <button className={styles.button_navbar}>
                <Link to={`/`}>Home</Link>
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

export default ProfilePageNavBar;
