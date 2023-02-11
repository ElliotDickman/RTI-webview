import React from "react";
import styles from "./LandingHeader.module.css";
import SearchBar from "../SearchBar/SearchBar";

const LandingHeader = () => {
  return (
    <header>
      <h1 className={`${styles.logo}`}>RTI Viewer</h1>
      <SearchBar />
    </header>
  );
};

export default LandingHeader;
