import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BasicCarousel from "../components/BasicCarousel";
import ServicesTabs from "../components/servicesTabs/ServicesTabs";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import styles from "./styles/Home.module.css";

const Home = () => {
const h3Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  vsisible: {
    x: 0,
    opacity: 1,
    ease: "easeOut",
  }
};

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className="homeBody"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, ease: "easeOut", x: 0 }}
          transition={{
          duration: 2,
          delay: 0.8,
          }}
        >
          Welcome to Triple Consult
        </motion.h1>
        <motion.h3
          initial={'hidden'}
          animate={'vsisible'}
          transition={{
          duration: 2,
          delay: 1.2,
          }}
          variants={h3Variants}
        >
          Usabiltiy thinking outside the box. Through the lens of i also believe
          it's important for every member to be involved and invested in our
          company and this is one way to do so, yet cloud native container based
          per my previous email, yet idea shower. Peel the onion today shall be
          a cloudy day,{" "}
        </motion.h3>
      </motion.div>
      <div className="homeContainer">
        <h1>OUR SERVICES:</h1>
        <ServicesTabs />
      </div>
      {/* <BasicCarousel /> */}
      <section className={styles.section_card_grid}>
        <h1>how we work:</h1>
        <div className={styles.home_container_secGrid}>
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Home;
