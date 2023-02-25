import React from "react";
import styles from "./ItemCard.module.css";

const ItemCard = ({ name, designer, img_url, onClick, active }) => {
  return (
    <div
      className={`${styles.card} ${active && styles.active}`}
      onClick={onClick}
    >
      <img className={`${styles.cardImage}`} src={img_url} alt={name}></img>
      <p className={`${styles.cardName}`}>{name}</p>
      <p className={`${styles.cardDesigner}`}>{designer}</p>
    </div>
  );
};

export default ItemCard;
