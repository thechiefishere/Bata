import React from "react";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <section className="header">
      <h1 className="header__logo">
        B<span>AT</span>A
      </h1>
      <BsCart2 className="header__cart" />
    </section>
  );
};

export default Header;
