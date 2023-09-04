import { motion } from "framer-motion";
import React from "react";
import law from "../../assets/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg";
import styles from "./Services.module.css";

function LawServices() {
  const liVariants = {
    hidden: {
      opacity: 0,
    },
    vsisible: {
      opacity: 1,
      ease: "easeOut",
    },
  };

  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView='visible'
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
      >
        LEGAL SERVICES:
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className={styles.conrainer_card}
      >
        <img src={law} alt="photo" />
        <div className={styles.border}></div>
        <ul className={styles.ul_container}>
        <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 0.7,
          }}
          variants={liVariants}>Criminal law</motion.li>
            <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 1.4,
          }}
          variants={liVariants}>Corporative law</motion.li>
            <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 2,
          }}
          variants={liVariants}>Property law</motion.li>
            <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 2.5,
          }}
          variants={liVariants}>Imigration law</motion.li>
           <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 3,
          }}
          variants={liVariants}>Tax law</motion.li>
        </ul>
      </motion.div>
    </>
  );
}

export default LawServices;
