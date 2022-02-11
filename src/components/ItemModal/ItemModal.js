import React from "react";
import "./ItemModal.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, hideItemModal } from "../../store/actions";
import { Link } from "react-router-dom";

const ItemModal = () => {
  const allProducts = useSelector((state) => state.products);
  const id = useSelector((state) => state.clickedProductId);
  const product = allProducts.find((product) => product._id === id);
  const dispatch = useDispatch();

  return (
    <section
      className="item-modal"
      onClick={() => {
        const item = {
          product,
          quantity: 1,
          size: 40,
        };
        dispatch(addToCart(item));
      }}
    >
      <h2 className="item-modal__heading">Item Added to Cart</h2>
      <img
        className="item-modal__image"
        src={product.images[0]}
        alt={product.name}
      />
      <h4>{product.name}</h4>
      <h4>{product.price}</h4>
      <button
        onClick={() => dispatch(hideItemModal())}
        className="btn item-modal__btn"
      >
        Continue Shopping
      </button>
      <Link
        onClick={() => dispatch(hideItemModal())}
        to="/cart"
        className="btn item-modal__link"
      >
        Go to Cart
      </Link>
    </section>
  );
};

export default ItemModal;
