import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Modes } from '../ModelPage/ModelPage';
import styles from './Lighting.module.css';
import { Plus, PlusWhite, Lightbulb } from '../../Img';

function Lighting({ visible, props }) {
  const HDRIRef = useRef(null);
  const [HDRIFile, setHDRIFile] = useState(null);
  return (
    <div className={`${styles.LightingContainer}`}>
      <div className={`${styles.LightingCard}`}>
        <label className={`${styles.Label}`} htmlFor=''>
          Lighting Preset
        </label>
        <select name='' id=''>
          <option value=''>Preset 1</option>
          <option value=''>Preset 2</option>
          <option value=''>Preset 3</option>
        </select>
      </div>
      <div className={`${styles.LightingCard}`}>
        <div className={`${styles.Label}`}>HDRI</div>
        <div
          onClick={() => {
            HDRIRef.current.click();
          }}
          className={`${styles.HDRIContainer}`}
        >
          <img src={PlusWhite} alt='Upload HDRI' />
        </div>

        <input
          style={{ display: 'none' }}
          type='file'
          ref={HDRIRef}
          onChange={(e) => {
            const filedUploaded = e.target.files[0];
            setHDRIFile(filedUploaded);
          }}
        />
      </div>

      <div className={`${styles.LightingCard}`}>
        <div className={`${styles.LightLabel}`}>
          <img src={Lightbulb} alt='' />
          <div className={`${styles.LightLabelSeparator}`}></div>
          <div>Light 1</div>
        </div>

        <div className={`${styles.BreakLine}`}></div>

        <div className={`${styles.Property}`}>
          <h3>Temperature</h3>
          <p>3500k</p>
        </div>
        <div className={`${styles.Property}`}>
          <h3>Intensity</h3>
          <p>1</p>
        </div>
        <div className={`${styles.Property}`}>
          <h3>Angle</h3>
          <p>45°</p>
        </div>
      </div>
      <div className={`${styles.AddLight}`}>
        <img src={Plus} alt='Upload HDRI' />
      </div>
    </div>
  );
}

export default Lighting;
