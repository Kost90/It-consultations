import FormContact from '../../components/ContactForm/ContactFrom'
import styles from './ContactUsPage.module.css'

function ContactUsPage() {

  return (
    <div className={styles.flex_container_page}>
      <div className={styles.flex_container_text}>
      <h1>How can we help you ?</h1>
      <p>Fill out and send a form. Our Team will contact you promptly.</p>
      </div>
      <FormContact/>
    </div>
  )
}

export default ContactUsPage