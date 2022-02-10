import React from "react";
import "./CartItem.css";
import ItemDetails from "../ItemDetails/ItemDetails";
import {
  removeFromCart,
  updateItemToEdit,
  showEditModal,
} from "../../store/actions";
import { useDispatch } from "react-redux";

const CartItem = ({ item, index }) => {
  const { images, name, price, _id: id } = item.product;
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(updateItemToEdit(index));
    dispatch(showEditModal());
  };

  return (
    <section className="item">
      <div className="item__display">
        <img className="item__image" src={images[0]} alt={name} />
        <ItemDetails item={item} />
      </div>
      <div className="item__edit">
        <div className="btn-group">
          <button
            onClick={() => dispatch(removeFromCart(index))}
            className="btn btn--item"
          >
            Remove
          </button>
          <div className="seperator"></div>
          <button onClick={handleEdit} className="btn btn--item">
            Edit
          </button>
        </div>
        <h4>${price}</h4>
      </div>
    </section>
  );
};

export default CartItem;
