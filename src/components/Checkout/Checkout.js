import React from "react";
import "./Checkout.css";
import {
  getNumberOfItemsInCart,
  getSubTotal,
  getSumTotal,
  getTotalTax,
} from "../../util/functions";

const Checkout = ({ cartItems }) => {
  return (
    <aside className="checkout">
      <div className="checkout__block">
        <h3>Subtotal: </h3>
        <h3>N{getSubTotal(cartItems)}</h3>
      </div>
      <div className="checkout__block">
        <h3>VAT: </h3>
        <h3>N{getTotalTax(cartItems)}</h3>
      </div>
      <div className="checkout__block">
        <h3>Esitmated Shiping: </h3>
        <h3>Free</h3>
      </div>
      <div className="checkout__block">
        <h3>TOTAL: </h3>
        <h3>N{getSumTotal(cartItems)}</h3>
      </div>
      <button className="btn btn-checkout">
        CHECKOUT({getNumberOfItemsInCart(cartItems)})
      </button>
      <button className="btn btn-paypal">
        PAY<span>PAL</span>
      </button>
    </aside>
  );
};

export default Checkout;
