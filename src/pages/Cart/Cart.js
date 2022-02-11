import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import EditModal from "../../components/EditModal/EditModal";
import Checkout from "../../components/Checkout/Checkout";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <section className="cart">
      <h2 className="cart__title">shopping bag(0)</h2>
      <article className="cart__items">
        {cartItems.map((item, index) => {
          return <CartItem key={item.product._id} item={item} index={index} />;
        })}
      </article>
      <Checkout cartItems={cartItems} />
      <EditModal />
    </section>
  );
};

export default Cart;
