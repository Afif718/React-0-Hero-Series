/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ names }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (name, event) => {
    let newItems = [...activeItems, name];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group ">
      {names.map((name) => (
        // eslint-disable-next-line react/jsx-key
        //friendName={name} <---- this is props
        <Item
          key={name}
          friendName={name}
          addedFriend={activeItems.includes(name)}
          handleBuyButton={(event) => onBuyButton(name, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
