import React from "react";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <section className="header">
      <h1 className="header__logo">
        B<span>AT</span>A
      </h1>
      <div className="header__cart-container">
        <BsCart2 className="header__cart" />
        <p className="header__cart-text">My Cart</p>
      </div>
    </section>
  );
};

export default Header;
