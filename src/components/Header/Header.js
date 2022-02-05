import React from "react";
import "./Header.css";
import { BsCart2 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const navigate = useNavigate();

  const openCart = () => {
    navigate("/cart");
  };

  return (
    <section className="header">
      <div className="header__start">
        <FaBars className="header__menu" />
        <Link to="/" className="header__logo">
          BATA
        </Link>
      </div>
      <div onClick={openCart} className="header__cart">
        <BsCart2 className="header__cart-logo" />
        <p className="header__cart-count">{cartItems.length}</p>
      </div>
    </section>
  );
};

export default Header;
