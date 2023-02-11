import React from "react";
import styles from "./LandingMain.module.css";
import Sort from "../Sort/Sort";

const LandingMain = () => {
  return (
    <main className={`${styles.mainContainer}`}>
      <div className={`${styles.resultAndSort}`}>
        <p className={`${styles.result}`}>1,234,567 results for "laptop"</p>
        <Sort />
      </div>
    </main>
  );
};

export default LandingMain;
