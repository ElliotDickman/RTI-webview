import React, { Fragment, useState, useEffect } from 'react';
import { Modes } from '../ModelPage/ModelPage';
import styles from './Ruler.module.css';

function Ruler({ start, end, distance, visible, props }) {
  let x = Math.abs(end.x - start.x);
  let y = Math.abs(end.y - start.y);

  let d = Math.round(Math.sqrt(x * x + y * y) * 100) / 100;

  return (
    <div className={`${styles.RulerContainer}`}>
      <div className={`${styles.RulerStat}`}>
        <p>Starting Point</p>
        <span>
          (x: {start.x} y:{start.y})
        </span>
      </div>
      <div className={`${styles.RulerStat}`}>
        <p>End Point</p>
        <span>
          (x: {end.x} y:{end.y})
        </span>
      </div>

      <div className={`${styles.BreakLine}`}></div>

      <div className={`${styles.RulerStat}`}>
        <p>Distance</p>
        <span>{d} cm</span>
      </div>
    </div>
  );
}

export default Ruler;
