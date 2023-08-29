import React from 'react'
import finance from '../../assets/pexels-david-mcbee-730547.jpg';
import styles from './Services.module.css'

function FinanceServices() {
  return (
    <div className={styles.conrainer_card}>
        <img src={finance} alt='photo'/>
        <div className={styles.border}></div>
        <ul className={styles.ul_container}>
            <h2>Finance Services:</h2>
            <li>Finance audite</li>
            <li>Tax optimization</li>
            <li>Full buisness support</li>
        </ul>
    </div>
  )
}

export default FinanceServices