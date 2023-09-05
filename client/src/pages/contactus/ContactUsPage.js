import { useState } from "react";
import FormContact from "../../components/ContactForm/ContactFrom";
import PopUpWindow from "../../components/popupwindow/PopUpWindow";
import styles from "./ContactUsPage.module.css";

function ContactUsPage() {
  const [isVisible, setVisible] = useState(false);

  const handelVisibility = () => {
    setVisible((state) => !state);
  };

  return (
    <>
      {isVisible ? (
        <div className={styles.flex_container_page}>
        <PopUpWindow visibility={isVisible} setvisibility={handelVisibility}/>
        </div>
      ) : (
        <div className={styles.flex_container_page}>
          <div className={styles.flex_container_text}>
            <h1>How can we help you ?</h1>
            <p>Fill out and send a form. Our Team will contact you promptly.</p>
          </div>
          <FormContact setvisibility={handelVisibility} />
        </div>
      )}
    </>
  );
}

export default ContactUsPage;
