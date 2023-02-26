import React, { Fragment, useState, useEffect } from 'react';
import { Modes } from '../ModelPage/ModelPage';
import styles from './Ruler.module.css';

function Ruler({ visible, props }) {
  return (
    <div className={`${styles.RulerContainer}`}>
      <div className={`${styles.RulerStat}`}>
        <p>Starting Point</p>
        <span>(x: 12 y:43)</span>
      </div>
      <div className={`${styles.RulerStat}`}>
        <p>End Point</p>
        <span>(x: 12 y:43)</span>
      </div>

      <div className={`${styles.BreakLine}`}></div>
    </div>
  );
}

export default Ruler;
