import React from "react";
import "./Checkout.css";
import { getSubTotal, getSumTotal, getTotalTax } from "../../util/functions";

const Checkout = ({ cartItems }) => {
  return (
    <aside className="checkout">
      <div className="checkout__block">
        <h3>Subtotal: </h3>
        <h3>${getSubTotal(cartItems)}</h3>
      </div>
      <div className="checkout__block">
        <h3>TAX: </h3>
        <h3>${getTotalTax(cartItems)}</h3>
      </div>
      <div className="checkout__block">
        <h3>TOTAL: </h3>
        <h3>${getSumTotal(cartItems)}</h3>
      </div>
    </aside>
  );
};

export default Checkout;
