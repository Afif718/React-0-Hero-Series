import { useState } from "react";
import styles from "./Item.module.css";

/* eslint-disable react/prop-types */
const Item = ({ friendName, addedFriend, handleBuyButton }) => {
  // const addButton = (event) => {
  //   console.log(event);
  //   console.log(`${friendName} is added`);
  // };

  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${
        addedFriend && "active"
      }`}>
      <span className={`${styles["kg-span"]}`}>{friendName}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}>
        Add Friend
      </button>
    </li>
  );
};

export default Item;
