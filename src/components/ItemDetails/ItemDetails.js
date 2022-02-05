import React from "react";
import "./ItemDetails.css";

const ItemDetails = ({ item }) => {
  const { name, _id: id } = item.product;

  return (
    <aside className="cart-details">
      <h3>{name}</h3>
      <h5>Item: {id}</h5>
      <h5>Qty: {item.quantity}</h5>
      <h5>Size: {item.size}</h5>
    </aside>
  );
};

export default ItemDetails;
