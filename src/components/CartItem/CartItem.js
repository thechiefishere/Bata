import React from "react";

const CartItem = ({ item }) => {
  const { images, name } = item;

  return (
    <section className="cart-item">
      <img src={images[0]} alt={name} />
    </section>
  );
};

export default CartItem;
