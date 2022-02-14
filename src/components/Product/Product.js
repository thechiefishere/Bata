import React, { useState } from "react";
import "./Product.css";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  changeClickedProductId,
  showItemModal,
} from "../../store/actions";

const Product = ({ product }) => {
  const [isBeingHoveredOn, setIsBeingHoveredOn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <article
      className="product"
      onMouseOver={() => setIsBeingHoveredOn(true)}
      onMouseOut={() => setIsBeingHoveredOn(false)}
    >
      <div onClick={() => navigate(`${product._id}`)}>
        <div className="product__img-container">
          <img
            className={`product__img ${
              isBeingHoveredOn && "scale-product__img"
            }`}
            src={product.images[0]}
            alt="product"
          />
        </div>
        <div>
          <p>{product.name}</p>
          <p className="product__price">N{product.price}</p>
        </div>
      </div>
      <BsCart2
        onClick={() => {
          const item = {
            id: `${product._id}40`,
            product,
            quantity: 1,
            size: 40,
          };
          dispatch(addToCart(item));
          dispatch(changeClickedProductId(product._id));
          dispatch(showItemModal());
        }}
        className={`product__cart ${isBeingHoveredOn && "show-product__cart"}`}
      />
    </article>
  );
};

export default Product;
