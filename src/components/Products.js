import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const Products = () => {
  return <section></section>;
};

export default connect(mapStateToProps)(Products);
