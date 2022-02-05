import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingState, addToCart } from "../../store/actions";
import Loading from "../../components/Loading/Loading";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { BsCart2 } from "react-icons/bs";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [orderCount, setOrderCount] = useState(1);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoadingData);
  const arr = [40, 41, 42, 43, 44];
  const [selectedSize, setSelectedSize] = useState(40);

  const fetchProduct = async () => {
    dispatch(setLoadingState(true));
    const response = await fetch(
      `http://localhost:5000/api/v1/footwears/${productId}`
    );
    const data = await response.json();
    if (data.status === "success") {
      dispatch(setLoadingState(false));
      setProduct(data.item);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const increaseOrder = () => {
    setOrderCount((prev) => prev + 1);
  };

  const decreaseOrder = () => {
    if (orderCount === 1) return;
    setOrderCount((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    const cartItem = {
      product,
      quantity: orderCount,
      size: selectedSize,
    };
    dispatch(addToCart(cartItem));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {product !== null && (
        <section className="details">
          <ImageSlider gallery={product.images} />
          <article className="details__text">
            <p className="details__heading">BATA COMPANY</p>
            <h3 className="details__name">{product.name}</h3>
            <p className="details__description">{product.description}</p>
            <div className="details__attribute">
              <h3>Size:</h3>
              <div className="details__sizes">
                {arr.map((val, index) => {
                  return (
                    <div
                      className={`details__sizes__box ${
                        selectedSize === val && "selected"
                      }`}
                      key={index}
                      onClick={() => setSelectedSize(val)}
                    >
                      <input type="radio" name="size" />
                      {val}
                    </div>
                  );
                })}
              </div>
            </div>
            <h3 className="details__price">N{product.price}</h3>
            <div className="details__order">
              <button onClick={decreaseOrder}>-</button>
              <p>{orderCount}</p>
              <button onClick={increaseOrder}>+</button>
            </div>
            <button onClick={handleAddToCart} className="details__btn">
              <BsCart2 /> Add To Cart
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
