import React from 'react'
import styles from './Hamburgermenu.module.css'
import { memo } from 'react';

const Hamburger = memo (({isOpen}) =>{

  return (
    <div className={styles.hamburger_menu}>
        <div className={isOpen?`${styles.burger} ${styles.burger_1}`:styles.burger}></div>
        <div className={isOpen?`${styles.burger} ${styles.burger_2}`:styles.burger}></div>
        <div className={isOpen?`${styles.burger} ${styles.burger_3}`:styles.burger}></div>
    </div>
  )
})

export default Hamburger