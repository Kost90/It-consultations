import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import ServicesTabs from "../components/servicesTabs/ServicesTabs";
import Card from "../components/card/Card";
import styles from "./styles/Home.module.css";

const Home = () => {
const textVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  vsisible: custom => ({
    x: 0,
    opacity: 1,
    ease: "easeOut",
    transition: {duration: custom * 0.3, delay: custom * 0.5}
  }),
};

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="homeBody"
      >
        <motion.h1
          initial={'hidden'}
          animate={'vsisible'}
          custom={1}
          variants={textVariants}
        >
          Welcome to Triple Consult
        </motion.h1>
        <motion.h3
          initial={'hidden'}
          animate={'vsisible'}
          custom={2}
          variants={textVariants}
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
      <section className={styles.section_card_grid}>
        <motion.h1
        initial= {{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        whileInView={
          {y: 0,
          opacity: 1,
        }}
        viewport={{amount: 0.2, once: true}}
        >how we work:</motion.h1>
        <motion.div
        viewport={{amount: 0.2, once: true}}
         className={styles.home_container_secGrid}>
          <Card />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
