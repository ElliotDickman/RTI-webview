import React from "react";
import styles from "./WelcomeBanner.module.css";

const WelcomeBanner = ({ welcomeBanner, setWelcomeBanner }) => {
  return (
    <div
      className={`${styles.welcomeBannerComtainer} ${
        !welcomeBanner && styles.welcomeBannerComtainerDisappear
      }`}
    >
      <div className={styles.welcomeBanner}>
        <div className={styles.welcomeBannerText}>
          <h1 className={styles.title}>RTI VIEWER</h1>
          <p className={styles.subtitle}>-by Drexel University</p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim odio
            sit recusandae voluptatum, officia corporis suscipit molestias
            cupiditate reprehenderit, veniam veritatis repellendus itaque. Amet,
            illum maxime. Ad, repellat possimus quae in sed illo quibusdam hic
            impedit a aliquam minus nulla cupiditate laudantium autem iure
            veniam. Cum rerum suscipit nisi beatae?
          </p>
        </div>
        <div className={styles.welcomeBannerButtonContainer}>
          <button
            onClick={() => setWelcomeBanner(false)}
            className={styles.welcomeBannerButton}
          >
            Continue
            <svg
              width="72"
              height="48"
              viewBox="0 0 72 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24H70M70 24L46.7925 1M70 24L46.7925 47"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
