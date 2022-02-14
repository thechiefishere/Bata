import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import EditModal from "../../components/EditModal/EditModal";
import Checkout from "../../components/Checkout/Checkout";
import { getNumberOfItemsInCart } from "../../util/functions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <section className="cart">
      <h2 className="cart__title">
        shopping bag({getNumberOfItemsInCart(cartItems)})
      </h2>
      <section className="cart__details">
        <article className="cart__items">
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </article>
        <Checkout cartItems={cartItems} />
      </section>
      <EditModal />
    </section>
  );
};

export default Cart;
