import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom';
import styles from './PopUpWindow.module.css'


function PopUpWindow({visibility, setvisibility}) {

    const handelVisibility = () =>{
        setvisibility();
      };

  return (
    <AnimatePresence>
        {
            visibility && (
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:0.5}}
                className={styles.popup_window_container}>
                    <div className={styles.text_container}>
                        <h1>Thank you form your message</h1>
                        <h2>Your message succesfully send</h2>
                        <h3>Our teame will be in touch with you shortly.</h3>
                        <p>For online chat with our teame we recommend you register in our website</p>
                        <button className={styles.popupwindow_button}>
                        <Link to="/register">
                        Register
                        </Link>
                        </button>
                    </div>
                    <button type="button" onClick={handelVisibility} className={styles.close_btn_popup}>X</button>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default PopUpWindow