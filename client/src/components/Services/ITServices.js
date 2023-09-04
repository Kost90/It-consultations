import { motion } from 'framer-motion';
import it from '../../assets/pexels-alex-souza-18004842.jpg';
import styles from './Services.module.css'

function ITServices() {
  const liVariants = {
    hidden: {
      opacity: 0,
    },
    vsisible: {
      opacity: 1,
      ease: "easeOut",
    }
  };
  return (
    <>
    <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 2,
      delay: 0.5,
    }}>IT SERVICES:</motion.h1>
     <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }} className={styles.conrainer_card}>
        <img src={it} alt='photo'/>
        <div className={styles.border}></div>
        <ul className={styles.ul_container}>
            <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 0.7,
          }}
          variants={liVariants}>Front end</motion.li>
            <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 1.4,
          }}
          variants={liVariants}>Back end</motion.li>
            <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 2,
          }}
          variants={liVariants}>Web designe</motion.li>
            <motion.li 
            initial={'hidden'}
            animate={'vsisible'}
            transition={{
            duration: 1,
            delay: 2.5,
          }}
          variants={liVariants}>Full stack project</motion.li>
        </ul>
    </motion.div>
    </>
  )
}

export default ITServices