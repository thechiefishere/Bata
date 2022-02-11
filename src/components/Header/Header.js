import React from "react";
import "./Header.css";
import { BsCart2 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { showSidebar } from "../../store/actions";
import { getNumberOfItemsInCart } from "../../util/functions";

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openCart = () => {
    navigate("/cart");
  };

  return (
    <section className="header">
      <div className="header__start">
        <FaBars
          onClick={() => dispatch(showSidebar())}
          className="header__menu"
        />
        <Link to="/" className="header__logo">
          BATA
        </Link>
      </div>
      <div onClick={openCart} className="header__cart">
        <BsCart2 className="header__cart-logo" />
        <p className="header__cart-count">
          {getNumberOfItemsInCart(cartItems)}
        </p>
      </div>
    </section>
  );
};

export default Header;
