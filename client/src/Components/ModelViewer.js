import 'aframe';
import styles from './ModelViewer.module.css';
require('./AFrame/AFrameComponents');

function ModelViewer(props) {
  return (
    <div className={styles.embeddedSceneContainer}>
      <data-handler
        id="dataHandler"
        data-id="none"
        pivot_x="0"
        pivot_y="0"
      ></data-handler>
      <a-scene
        id="3DScene"
        renderer="colorManagement: true;"
        cursor="rayOrigin: mouse"
        vr-mode-ui="enabled: false"
        embedded
      >
        <a-entity id="sceneContainer">
          <a-sky color="white"></a-sky>
          <a-entity id="lightingContainer" drag-rotate-component>
            <a-light
              type="directional"
              position="-1 2 0"
              rotation="-90 0 0"
              target="#directionaltarget"
            >
              <a-entity id="directionaltarget" position="0 0.8 -2"></a-entity>
            </a-light>

            <a-light
              type="directional"
              position="2 3 -2"
              rotation="-90 0 0"
              target="#directionaltarget"
            >
              <a-entity id="directionaltarget" position="0 0.8 -2"></a-entity>
            </a-light>
          </a-entity>
          <a-entity
            gltf-model={
              'url(' +
              process.env.PUBLIC_URL +
              'models/helmet/DamagedHelmet.gltf)'
            }
            position="0 0.8 -2"
            rotation="0 30 0"
            scale="1 1 1"
          ></a-entity>
        </a-entity>
        <a-entity
          id="camMain"
          camera="active: true"
          look-controls="enabled: false"
          mouse-cursor
          position="0 1.5 0"
          rotation="-20 0 0"
        ></a-entity>
      </a-scene>
    </div>
  );
}

export default ModelViewer;
