import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BasicCarousel from "../components/BasicCarousel";
import ServicesTabs from "../components/servicesTabs/ServicesTabs";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeBody">
        <h1>Welcome to Triple Consult</h1>
        <h3>
          Usabiltiy thinking outside the box. Through the lens of i also believe
          it's important for every member to be involved and invested in our
          company and this is one way to do so, yet cloud native container based
          per my previous email, yet idea shower. Peel the onion today shall be
          a cloudy day,{" "}
        </h3>
      </div>
      <div className="homeContainer">
        <h1>OUR SERVICES:</h1>
        <ServicesTabs />
      </div>
      <BasicCarousel />
      <section className={styles.section_card_grid}>
        <h1>how we work:</h1>
        <div className={styles.home_container_secGrid}>
          <Card />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
