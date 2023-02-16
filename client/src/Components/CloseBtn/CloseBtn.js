import styles from "./CloseBtn.module.css";
import { useState } from "react";


function CloseBtn({isOpen, Click, props}) {

  return (
    <div onClick={Click} className={`${styles.CloseBtn}  ${isOpen ? "" : styles.Open }`}>
    </div>
  );
}

export default CloseBtn;

