import * as THREE from "three";
import $ from "jquery";
const AFRAME = window.AFRAME;

AFRAME.registerComponent("drag-rotate-component", {
  init: function () {
    this.ifMouseDown = false;

    this.x_cord = 0;

    this.y_cord = 0;

    this.speed = 100;

    this.x_offset = parseFloat(
      document.getElementById("dataHandler").getAttribute("pivot_x")
    );

    this.z_offset = parseFloat(
      document.getElementById("dataHandler").getAttribute("pivot_z")
    );

    this.autoAnimate = false;

    this.theta = 0;

    this.hoverOverElement = false;

    /*
    this.el.setAttribute(
      "animation__rotation",
      "property: rotation.y; to: -0; autoplay: true; startEvents: new-area-selected"
    );

    this.el.setAttribute(
      "animation__position",
      "property: position; to: 0 0 0; autoplay: true; startEvents: new-area-selected"
    );
    */

    // this.el.setAttribute('scale', '10 10 10');

    // console.log(this.x_offset);

    document.addEventListener("mousedown", this.OnDocumentMouseDown.bind(this));

    document.addEventListener("mouseup", this.OnDocumentMouseUp.bind(this));

    document.addEventListener("mousemove", this.OnDocumentMouseMove.bind(this));
  },

  OnDocumentMouseDown: function (event) {
    this.ifMouseDown = true;

    this.x_cord = event.clientX;

    this.y_cord = event.clientY;

    // Set pivot on mouseDown

    this.x_offset = parseFloat(
      document.getElementById("dataHandler").getAttribute("pivot_x")
    );

    this.z_offset = parseFloat(
      document.getElementById("dataHandler").getAttribute("pivot_z")
    );
  },

  OnDocumentMouseUp: function () {
    this.ifMouseDown = false;

    // Set slight delay to processes can try running on mouseup before resetting isDragging

    setTimeout(() => {
      $("#dataHandler").attr("isDragging", false);
    }, 100);
  },

  OnDocumentMouseMove: function (event) {
    $("#dataPanelContainer").mouseenter(() => {
      this.hoverOverElement = true;
    });

    $("#dataPanelContainer").mouseleave(() => {
      this.hoverOverElement = false;
    });

    if (this.ifMouseDown && !this.hoverOverElement) {
      console.log("Dragging");
      $("#dataHandler").attr("isDragging", true);

      var temp_x = ((event.clientX - this.x_cord) * this.speed) / 1000;

      var temp_y = ((event.clientY - this.y_cord) * this.speed) / 1000;

      if (Math.abs(temp_y) < Math.abs(temp_x)) {
        this.el.object3D.rotateY((temp_x * this.speed) / 1000);

        /*********************/
        // For rotation around pivot
        /*********************/
        /*
        const m = new THREE.Matrix4();

        m.set(
          Math.cos(temp_x),
          0,
          Math.sin(temp_x),
          -1 * this.x_offset * Math.cos(temp_x) +
            -1 * this.z_offset * Math.sin(temp_x) +
            this.x_offset,

          0,
          1,
          0,
          0,

          -1 * Math.sin(temp_x),
          0,
          Math.cos(temp_x),
          this.x_offset * Math.sin(temp_x) +
            -1 * this.z_offset * Math.cos(temp_x) +
            this.z_offset,

          0,
          0,
          0,
          1
        );

        this.el.object3D.applyMatrix4(m);
        */
      } else {
        // Uncomment below to enable Y rotation
        // this.el.object3D.rotateX((temp_y * this.speed) / 1000);
      }

      this.x_cord = event.clientX;

      this.y_cord = event.clientY;
    }
  },
});
