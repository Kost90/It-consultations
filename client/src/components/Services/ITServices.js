import React from 'react'
import it from '../../assets/pexels-alex-souza-18004842.jpg';
import styles from './Services.module.css'

function ITServices() {
  return (
    <div className={styles.conrainer_card}>
        <img src={it} alt='photo'/>
        <div className={styles.border}></div>
        <ul className={styles.ul_container}>
            <h2>IT Services:</h2>
            <li>Front end</li>
            <li>Back end</li>
            <li>Web designe</li>
            <li>Full stack project</li>
        </ul>
    </div>
  )
}

export default ITServices