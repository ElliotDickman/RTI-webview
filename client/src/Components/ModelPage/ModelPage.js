import React, { useState, useEffect } from 'react';
import ModelViewer from '../ModelViewer/ModelViewer';
import SidePanel from '../SidePanel/SidePanel';
import { sampleWork } from '../../sampleData';
import styles from './ModelPage.module.css';

export const Modes = Object.freeze({
  Info: 'Information',
  Ruler: 'Ruler',
  ColorPicker: 'Color Picker',
  Lighting: 'Lighting',
});

function ModelPage(props) {
  const [activeMode, setActiveMode] = useState(Modes.Info);
  const [showPanel, setShowPanel] = useState(true);

  useEffect(() => {
    console.log(activeMode);
  }, [activeMode]);

  return (
    <div>
      <SidePanel
        mode={activeMode}
        work={sampleWork}
        visible={showPanel}
        setVisible={setShowPanel}
        setMode={setActiveMode}
      />
      <div className={`${styles.UIContainer}`}></div>
      <ModelViewer />
    </div>
  );
}

export default ModelPage;
