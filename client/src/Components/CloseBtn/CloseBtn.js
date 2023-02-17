import styles from "./CloseBtn.module.css";
import { useState } from "react";
import arrow from "../../Img/RightArrow.svg"


function CloseBtn({isOpen, Click, props}) {

  return (
    <div onClick={Click} className={`${styles.arrow} `}>
      <img src={arrow} alt="" />
    </div>
  );
}

export default CloseBtn;

