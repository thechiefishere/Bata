import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <section className="header">
      <div className="header__start">
        <FaBars className="header__menu" />
        <h1 className="header__logo">BATA</h1>
      </div>
      <BsCart2 className="header__cart" />
    </section>
  );
};

export default Header;
