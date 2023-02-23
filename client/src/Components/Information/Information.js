import React, { Fragment, useState, useEffect } from 'react';
import styles from './Information.module.css';

function Information({ visible, data, props }) {
  return (
    <>
      <div className={`${styles.infoImage}`}></div>
      <div className={`${styles.infoBody} ${visible ? '' : styles.hidden}`}>
        {data.desc}
      </div>
    </>
  );
}

export default Information;
