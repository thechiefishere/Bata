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
          src={product.images[0]}
          alt="product"
        />
        <BsCart2
          className={`product__cart ${
            isBeingHoveredOn && "show-product__cart"
          }`}
          onClick={() => navigate(`${product._id}`)}
        />
      </div>
      <div>
        <p>{product.name}</p>
        <p className="product__price">N{product.price}</p>
      </div>
    </article>
  );
};

export default Product;
