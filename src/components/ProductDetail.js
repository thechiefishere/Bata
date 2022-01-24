import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingState } from "../store/actions";
import Loading from "./Loading";
import ImageSlider from "./ImageSlider";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoadingData);

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {product !== null && (
        <section>
          <ImageSlider gallery={product.images} />
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
