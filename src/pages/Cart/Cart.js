import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <section className="cart">
      <h2 className="cart__title">shopping bag(0)</h2>
      <article className="cart__items">
        {cartItems.map((item) => {
          return <CartItem key={item._id} item={item} />;
        })}
      </article>
    </section>
  );
};

export default Cart;
