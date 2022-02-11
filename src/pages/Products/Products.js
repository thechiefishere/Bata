import React from "react";
import { useSelector } from "react-redux";
import ItemModal from "../../components/ItemModal/ItemModal";
import Loading from "../../components/Loading/Loading";
import Product from "../../components/Product/Product";

const Products = () => {
  const loading = useSelector((state) => state.isLoadingData);
  const allProducts = useSelector((state) => state.products);
  const showItemModal = useSelector((state) => state.showItemModal);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="products">
      {allProducts.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
      {showItemModal && <ItemModal />}
    </section>
  );
};

export default Products;
