import { motion } from "framer-motion";
import finance from "../../assets/pexels-david-mcbee-730547.jpg";
import styles from "./Services.module.css";

function FinanceServices() {
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
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
      >
        FINANCE SERVICES:
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
        <img src={finance} alt="photo" />
        <div className={styles.border}></div>
        <ul className={styles.ul_container}>
          <motion.li
            initial={"hidden"}
            animate={"vsisible"}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            variants={liVariants}
          >
            Finance audite
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"vsisible"}
            transition={{
              duration: 1,
              delay: 1.4,
            }}
            variants={liVariants}
          >
            Tax optimization
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"vsisible"}
            transition={{
              duration: 1,
              delay: 2,
            }}
            variants={liVariants}
          >
            Full buisness support
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
}

export default FinanceServices;
