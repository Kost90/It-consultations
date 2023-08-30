import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.container_footer}>
        <h2>Triple Consult</h2>
        <button type='button' className={styles.button_footer}>
        <Link to='/contactus'>Contact us</Link>
        </button>
    </div>
  )
}

export default Footer