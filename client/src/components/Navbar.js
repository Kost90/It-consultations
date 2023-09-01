import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchLoginUser, DeleteLoginUser } from "../api/LoginInfoSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime, faHouse } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./hamburger/HamburgerMenu";
import styles from "./styles/Navbar.module.css";

let user = {};

const Navbar = () => {
  const scrennWidth = window.screen.width;
  const dispatch = useDispatch();
  const { LoginUser, statuslogin, errorlogin } = useSelector(
    (state) => state.logininfo
  );

  const [isOpen, setsiOpen] = useState(false);

  const toggleHamburger = () => {
    console.log(scrennWidth);
    if (scrennWidth >= 768) {
      return;
    } else {
      setsiOpen(!isOpen);
    }
  };

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

  return (
    <header>
      <div className={isOpen ? styles.logo_show : styles.logo_show_black}>
        <FontAwesomeIcon icon={faPeopleGroup} className={styles.logo_nav_bar} />
        <Link to="/" className={styles.routerLink_logo}>
          Triple Consult
        </Link>
      </div>
      <ul className={isOpen ? styles.openHamburger : styles.closeHamburger}>
        <li>
          <FontAwesomeIcon icon={faHouse} className={styles.icons_header} />
          <span>
            <Link
              to="/"
              className={styles.routerLink}
              onClick={toggleHamburger}
            >
              Home
            </Link>
          </span>
        </li>

        <li>
          <FontAwesomeIcon icon={faUserTie} className={styles.icons_header} />
          <span>
            <Link
              to="/experts"
              className={styles.routerLink}
              onClick={toggleHamburger}
            >
              Our Experts
            </Link>
          </span>
        </li>

        {user !== undefined ? (
          <>
            <button className={styles.button_navbar}>
              <Link
                to={`/profilepage/${user.username}`}
                onClick={toggleHamburger}
              >
                Profile
              </Link>
            </button>
            <button
              type="button"
              onClick={() => {
                HandelClick(user.id);
              }}
              className={styles.button_navbar}
            >
              <Link to="/" onClick={toggleHamburger}>
                Logout
              </Link>
            </button>
          </>
        ) : (
          <>
            <button className={styles.button_navbar}>
              <Link to="/register" onClick={toggleHamburger}>
                Register
              </Link>
            </button>
            <button className={styles.button_navbar}>
              <Link to="/loginpage" onClick={toggleHamburger}>
                Login
              </Link>
            </button>
            <button type="button" className={styles.button_navbar}>
              <Link to="/contactus" onClick={toggleHamburger}>
                Contact us
              </Link>
            </button>
          </>
        )}
      </ul>
      <div className={styles.hamburger} onClick={toggleHamburger}>
        <Hamburger isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Navbar;
