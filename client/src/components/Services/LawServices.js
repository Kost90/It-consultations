import React from 'react'
import law from '../../assets/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg';
import styles from './Services.module.css'

function LawServices() {
  return (
    <>
    <h1>OUR LEGAL SERVICES:</h1>
    <div className={styles.conrainer_card}>
        <img src={law} alt='photo'/>
        <div className={styles.border}></div>
        <ul className={styles.ul_container}>
            <h2>Legal Services:</h2>
            <li>Criminal law</li>
            <li>Corporative law</li>
            <li>Property law</li>
            <li>Imigration law</li>
            <li>Tax law</li>
        </ul>
    </div>
    </>
    
  )
}

export default LawServices