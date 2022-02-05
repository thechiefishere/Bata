import React from "react";
import "./ItemDetails.css";

const ItemDetails = ({ item }) => {
  const { name, _id: id } = item;

  return (
    <aside className="cart-details">
      <h3>{name}</h3>
      <h5>Item: {id}</h5>
      <h5>Qty: </h5>
    </aside>
  );
};

export default ItemDetails;
