import React, { useState } from "react";
import styles from "./ItemsContainer.module.css";
import ItemCard from "../ItemCard/ItemCard";

const ItemsContainer = () => {
  const [activeItem, setActiveItem] = useState(null);

  const itemCardData = [
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
    {
      name: "Untitled Wool Tapestry",
      designer: "Shiela Hicks",
      img_url: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className={styles.container}>
      <div
        className={`${styles.itemsContainer} ${
          activeItem !== null && styles.shrinkItemsContainer
        }`}
      >
        {itemCardData.map((item, index) => (
          <ItemCard
            name={item.name}
            designer={item.designer}
            img_url={item.img_url}
            onClick={() => setActiveItem(index)}
            active={activeItem === index}
          />
        ))}
      </div>
      {activeItem !== null && (
        <div className={styles.modal}>
          <div className={styles.switcherContainer}>
            <div className={`${styles.switcher}`}>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.95579 10.2458C6.14204 10.0584 6.24658 9.80498 6.24658 9.5408C6.24658 9.27661 6.14204 9.02316 5.95579 8.8358L2.41579 5.2458L5.95579 1.7058C6.14204 1.51844 6.24658 1.26498 6.24658 1.0008C6.24658 0.736612 6.14204 0.483161 5.95579 0.295798C5.86283 0.20207 5.75223 0.127675 5.63037 0.0769067C5.50851 0.026138 5.3778 0 5.24579 0C5.11378 0 4.98307 0.026138 4.86121 0.0769067C4.73935 0.127675 4.62875 0.20207 4.53579 0.295798L0.29579 4.5358C0.202061 4.62876 0.127667 4.73936 0.0768986 4.86122C0.0261297 4.98308 -8.58307e-06 5.11379 -8.58307e-06 5.2458C-8.58307e-06 5.37781 0.0261297 5.50852 0.0768986 5.63037C0.127667 5.75223 0.202061 5.86283 0.29579 5.9558L4.53579 10.2458C4.62875 10.3395 4.73935 10.4139 4.86121 10.4647C4.98307 10.5155 5.11378 10.5416 5.24579 10.5416C5.3778 10.5416 5.50851 10.5155 5.63037 10.4647C5.75223 10.4139 5.86283 10.3395 5.95579 10.2458Z"
                  fill="#F2F2F2"
                />
              </svg>
              <p className={styles.switcherText}>Roughness</p>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.537374 0.295797C0.351124 0.48316 0.246582 0.736611 0.246582 1.0008C0.246582 1.26498 0.351124 1.51843 0.537374 1.7058L4.07737 5.2958L0.537374 8.8358C0.351124 9.02316 0.246582 9.27661 0.246582 9.5408C0.246582 9.80498 0.351124 10.0584 0.537374 10.2458C0.630337 10.3395 0.740938 10.4139 0.862798 10.4647C0.984657 10.5155 1.11536 10.5416 1.24737 10.5416C1.37939 10.5416 1.51009 10.5155 1.63195 10.4647C1.75381 10.4139 1.86441 10.3395 1.95737 10.2458L6.19737 6.0058C6.2911 5.91283 6.3655 5.80223 6.41627 5.68037C6.46703 5.55852 6.49317 5.42781 6.49317 5.2958C6.49317 5.16379 6.46703 5.03308 6.41627 4.91122C6.3655 4.78936 6.2911 4.67876 6.19737 4.5858L1.95737 0.295797C1.86441 0.202069 1.75381 0.127675 1.63195 0.0769062C1.51009 0.0261374 1.37939 -1.90735e-06 1.24737 -1.90735e-06C1.11536 -1.90735e-06 0.984657 0.0261374 0.862798 0.0769062C0.740938 0.127675 0.630337 0.202069 0.537374 0.295797Z"
                  fill="#F2F2F2"
                />
              </svg>
            </div>
          </div>
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.closeButton}`}
            onClick={() => setActiveItem(null)}
          >
            <line
              y1="-0.5"
              x2="33.9411"
              y2="-0.5"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24 25)"
              stroke="#282828"
            />
            <line
              y1="-0.5"
              x2="33.9411"
              y2="-0.5"
              transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 25)"
              stroke="#282828"
            />
          </svg>
          <img
            src="https://via.placeholder.com/300x200"
            alt="modal"
            className={`${styles.modalImage}`}
          />
          <div className={styles.modalContent}>
            <h1 className={`${styles.modalName}`}>
              A very very long name of a piece of fabrid
            </h1>
            <div className={`${styles.pill}`}>
              <div className={`${styles.modalDesignerContainer}`}>
                <p className={`${styles.modalDesigner}`}>Lorem</p>
                <div className={`${styles.separator}`}></div>
                <p className={`${styles.modalDesignerYear}`}>1500BC</p>
              </div>
            </div>
            {/* <button onClick={() => setModal(false)}>Close</button>
            <p>Some text in the Modal..</p> */}
            <div className={`${styles.informationContainer}`}>
              <p className={`${styles.informationName}`}>Collection</p>
              <p>A Collection Name</p>
            </div>
            <div className={`${styles.informationContainer}`}>
              <p className={`${styles.informationName}`}>Collection</p>
              <p>A Collection Name</p>
            </div>
            <div className={`${styles.informationContainer}`}>
              <p className={`${styles.informationName}`}>Collection</p>
              <p>A Collection Name</p>
            </div>
            <div className={`${styles.informationContainer}`}>
              <p className={`${styles.informationName}`}>Collection</p>
              <p>A Collection Name</p>
            </div>
            <div className={`${styles.viewButtonContainer}`}>
              <button className={`${styles.viewButton}`}>
                VIEW THIS ARTWORK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsContainer;
