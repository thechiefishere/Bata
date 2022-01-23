import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Product from "./Product";

const Products = () => {
  const loading = useSelector((state) => state.isLoadingData);
  const allProducts = useSelector((state) => state.products);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="products">
      {allProducts.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </section>
  );
};

export default Products;
