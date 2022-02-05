import React from "react";
import "./CartItem.css";
import ItemDetails from "../ItemDetails/ItemDetails";

const CartItem = ({ item }) => {
  const { images, name, price } = item;

  return (
    <section className="item">
      <div className="item__display">
        <img className="item__image" src={images[0]} alt={name} />
        <ItemDetails item={item} />
      </div>
      <div className="item__edit">
        <div className="btn-group">
          <button className="btn btn--item">Remove</button>
          <div className="seperator"></div>
          <button className="btn btn--item">Edit</button>
        </div>
        <h4>${price}</h4>
      </div>
    </section>
  );
};

export default CartItem;
