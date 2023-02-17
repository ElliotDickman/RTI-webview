import styles from './ColorPicker.module.css';
import { useState } from 'react';
import { Copy, Picker, Plus } from '../../Img';

function ColorPicker({ props }) {
  var pickedColor = '#353535';
  var colorLibrary = [1, 1, 1, 1, 1, 1, 1];
  var hex = '353535';
  var rgb = { r: 50, g: 50, b: 50 };
  var hsl = { h: 50, s: 50, l: 50 };
  var hsb = { h: 50, s: 50, b: 50 };
  return (
    <div className={`${styles.ColorPickerContainer}`}>
      <div className={`${styles.ColorPicker}`}>
        <div className={`${styles.Magnifier}`}></div>
        <div className={`${styles.ColorPickerBtn}`}>
          <img src={Picker} alt='' />
        </div>
      </div>

      <div className={`${styles.ColorData}`}>
        <div className={`${styles.data}`}>
          <span>HEX</span>
          #353535
        </div>
        <div className={`${styles.data}`}>
          <span>RGB</span>
          50 50 50
        </div>
        <div className={`${styles.data}`}>
          <span>HSL</span>
          50 50 50
        </div>
        <div className={`${styles.data}`}>
          <span>HSB</span>
          50 50 50
        </div>
      </div>

      <div className={`${styles.BreakLine}`}></div>

      <div className={`${styles.ColorLibraryContainer}`}>
        <div className={`${styles.ColorLibraryHeader}`}>
          <p>Color Library</p>
          <img src={Plus} alt='' />
        </div>

        <div className={`${styles.ColorLibrary}`}>
          
          {colorLibrary.length > 0
            ? colorLibrary.map((color) => (
                <div
                  style={{ backgroundColor: '#FF0000' }}
                  className={`${styles.Color}`}
                ></div>
              ))
            : "It's currently empty"}
        </div>

        <div className={`${styles.CopyLibrary}`}>
          <label htmlFor=''>Copy Library</label>
          <span>
            <select name='Format' id=''>
              <option value=''>HEX</option>
              <option value=''>RGB</option>
              <option value=''>HSL</option>
              <option value=''>HSB</option>
            </select>
            <button>
              <img src={Copy} alt='' />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
