import React from "react";
import expertFirst from "../assets/experts/Photo-member2.png";
import expertSecond from "../assets/experts/Photo-member3.png";
import expertThird from "../assets/experts/Photo-member4.png";
import styles from "./Experts/Experts.module.css";

const Experts = () => {
  return (
    <>
      <div className={styles.expert_page_container}>
        <h1>Our Experts:</h1>
        <div className={styles.container_Firstexpert_text}>
          <img src={expertFirst} alt="Expert" />
          <div className={styles.text_container}>
            <h2>Konstantyn</h2>
            <p>
              He has experience across all business disciplines and was brought
              on board for his Strategic and Operational knowledge in growing a
              multi site.
            </p>
          </div>
        </div>
        <div className={styles.container_Secondexpert_text}>
          <div className={styles.text_container}>
            <h2>Manuel</h2>
            <p>
              Professional, is a technical person who maintains, monitors and
              implements IT systems. Their common duties include network
              analysis, security and information assurance, IT audits, web and
              database administration.
            </p>
          </div>
          <img src={expertSecond} alt="Expert" />
        </div>
        <div className={styles.container_Thirdexpert_text}>
          <img src={expertThird} alt="Expert" />
          <div className={styles.text_container}>
            <h2>Prince</h2>
            <p>
              Preparing budget reports and financial statements in accordance
              with professional and regulatory standards. Performing risk
              modeling and quantifying results to advise strategic business
              decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experts;
