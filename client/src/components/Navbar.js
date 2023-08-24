import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navBarContainer">
        {/* <span className="logo"> IT Consultancy</span> */}
        <div className="logo">
          <FontAwesomeIcon icon={faPeopleGroup} />
          <span>
            <Link to="/" className="routerLink">
              Triple Consult
            </Link>
          </span>
        </div>
        <div className={styles.flex_container_navbar_button}>
          <button className={styles.button_navbar}>
            <Link to="/register">Register</Link>
          </button>
          <button className={styles.button_navbar}>
            <Link to="/loginpage">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
