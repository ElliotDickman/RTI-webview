import "aframe";
require("./AFrame/AFrameComponents");

function ModelViewer(props) {
  return (
    <div>
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
      >
        <a-entity id="sceneContainer">
          <a-sky color="aliceblue"></a-sky>
          <a-box
            position="0 1 -4"
            color="red"
            drag-rotate-component
            visible="false"
          ></a-box>
          <a-entity
            gltf-model={
              "url(" + process.env.PUBLIC_URL + "/models/BrainStem.gltf)"
            }
            drag-rotate-component
            position="0 0 -1.5"
            scale="0.8 0.8 0.8"
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
