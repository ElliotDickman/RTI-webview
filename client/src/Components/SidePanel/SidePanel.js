import React, { Fragment, useState, useEffect } from 'react';
import { Modes } from '../ModelPage/ModelPage';
import styles from './SidePanel.module.css';
import CloseBtn from '../CloseBtn/CloseBtn';

function SidePanel(props) {
  var { mode, work, visible, setVisible, setMode } = props;

  console.log(mode);
  return (
    <Fragment>
      <div className={`${styles.panelContainer}`}>
        {/* Icon buttons */}
        <div className={`${styles.modeIcons}`}>
          {/* Information */}
          <div
            className={`${styles.modeIcon} ${
              mode === Modes.Info && visible && styles.active
            }`}
            onClick={() => {
              if (visible && mode === Modes.Info) {
                setVisible(false);
              } else if (!visible) {
                setVisible(true);
              }
              setMode(Modes.Info);
            }}
          ></div>
          {/* Ruler */}
          <div
            className={`${styles.modeIcon} ${
              mode === Modes.Ruler && visible && styles.active
            }`}
            onClick={() => {
              if (visible && mode === Modes.Ruler) {
                setVisible(false);
              } else if (!visible) {
                setVisible(true);
              }
              setMode(Modes.Ruler);
            }}
          ></div>
          {/* Color Picker */}
          <div
            className={`${styles.modeIcon} ${
              mode === Modes.ColorPicker && visible && styles.active
            }`}
            onClick={() => {
              if (visible && mode === Modes.ColorPicker) {
                setVisible(false);
              } else if (!visible) {
                setVisible(true);
              }
              setMode(Modes.ColorPicker);
            }}
          ></div>
          {/* Lighting */}
          <div
            className={`${styles.modeIcon} ${
              mode === Modes.Lighting && visible && styles.active
            }`}
            onClick={() => {
              if (visible && mode === Modes.Lighting) {
                setVisible(false);
              } else if (!visible) {
                setVisible(true);
              }
              setMode(Modes.Lighting);
            }}
          ></div>
        </div>

        {/* Panel */}
        <div
          className={`${visible ? '' : styles.hidden} ${
            styles.sidePanelContainer
          }`}
        >
          <div className={`${styles.sidePanelHeader}`}>
            <div className={`${styles.sidePanelTitle}`}>{mode}</div>

            <CloseBtn />

            <div
              className={`${styles.sidePanelHide}`}
              onClick={() => {
                setVisible(false);
              }}
            ></div>
          </div>

          <div className={`${styles.sidePanelBody}`}>
            <div className={`${styles.infoImage}`}></div>
            <div className={`${styles.infoBody}`}>{work.desc}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SidePanel;
