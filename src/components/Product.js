import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const [isBeingHoveredOn, setIsBeingHoveredOn] = useState(false);
  const navigate = useNavigate();

  return (
    <article
      className="product"
      onMouseOver={() => setIsBeingHoveredOn(true)}
      onMouseOut={() => setIsBeingHoveredOn(false)}
    >
      <div className="product__img-container">
        <img
          className={`product__img ${isBeingHoveredOn && "scale-product__img"}`}
          src={product.image[0]}
          alt="product"
        />
        <BsCart2
          className={`product__cart ${
            isBeingHoveredOn && "show-product__cart"
          }`}
          onClick={() => navigate(`${product._id}`)}
        />
      </div>
      <p className="product__price">N{product.price}</p>
    </article>
  );
};

export default Product;
