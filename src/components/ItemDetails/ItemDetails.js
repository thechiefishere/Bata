import React from "react";

const ItemDetails = ({ item }) => {
  const { name, id: _id } = item;

  return (
    <aside>
      <h1>{name}</h1>
      <h3>Item: {id}</h3>
      <h3>Qty: </h3>
    </aside>
  );
};

export default ItemDetails;
