import styles from './ColorPicker.module.css';
import { useState } from 'react';
import { Copy, Picker, Plus } from '../../Img';

function ColorPicker({ visible, props }) {
  const [pickedColor, setPickedColor] = useState('#353535');

  const [colorLibrary, setColorLibrary] = useState([
    '#00ff00',
    '#00ffff',
    '#ffff00',
    '#ff0000',
    '#0000ff',
    '#355235',
  ]);

  const [hex, setHEX] = useState('#353535');
  const [rgb, setRGB] = useState({ r: 50, g: 50, b: 50 });
  const [hsl, setHSL] = useState({ h: 50, s: 50, l: 50 });
  const [hsb, setHSB] = useState({ h: 50, s: 50, b: 50 });

  function generateColorCodes(pickedColor) {
    setHEX('#367AB0');
    setRGB({ r: 54, g: 122, b: 176 });
    setHSL({ h: 207, s: 53, l: 545 });
    setHSB({ h: 207, s: 69, b: 49 });

    console.log(colorCodeToString(rgb));
  }

  function pickColor() {
    setPickedColor('#367AB0');
  }

  function addToLibrary(hex) {
    setColorLibrary([...colorLibrary, hex]);
    console.log('Add to library', colorLibrary);
  }

  return (
    <div
      className={`${styles.ColorPickerContainer} ${
        visible ? '' : styles.hidden
      }`}
    >
      <div className={`${styles.ColorPicker}`}>
        <div
          style={{ backgroundColor: pickedColor }}
          className={`${styles.Magnifier}`}
        ></div>
        <div
          onClick={() => {
            pickColor();
            generateColorCodes();
          }}
          className={`${styles.ColorPickerBtn}`}
        >
          <img src={Picker} alt='' />
        </div>
      </div>

      <div className={`${styles.ColorData}`}>
        <div className={`${styles.data}`}>
          <span>HEX</span>
          <span>{hex}</span>
        </div>
        <div className={`${styles.data}`}>
          <span>RGB</span>
          <span>{colorCodeToString(rgb)}</span>
        </div>
        <div className={`${styles.data}`}>
          <span>HSL</span>
          <span>{colorCodeToString(hsl)}</span>
        </div>
        <div className={`${styles.data}`}>
          <span>HSB</span>
          <span>{colorCodeToString(hsb)}</span>
        </div>
      </div>

      <div className={`${styles.BreakLine}`}></div>

      <div className={`${styles.ColorLibraryContainer}`}>
        <div className={`${styles.ColorLibraryHeader}`}>
          <p>Color Library</p>
          <img
            className={`${styles.button}`}
            onClick={() => addToLibrary(hex)}
            src={Plus}
            alt=''
          />
        </div>

        <div className={`${styles.ColorLibrary}`}>
          {colorLibrary.length > 0
            ? colorLibrary.map((color) => (
                <div
                  style={{ backgroundColor: color }}
                  className={`${styles.Color}`}
                ></div>
              ))
            : "It's currently empty"}
        </div>
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
  );
}

export default ColorPicker;

function toHEX(RBG) {}

function colorCodeToString(color) {
  let colorString = '';
  if (typeof color == 'object') {
    for (let value in color) {
      colorString += color[value];
      if (color[value] !== color[-1]) {
        colorString += ' ';
      }
    }
    return colorString;
  } else {
    return String(color);
  }
}
