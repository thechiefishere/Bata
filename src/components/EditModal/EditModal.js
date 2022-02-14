import React, { useState, useEffect, createRef } from "react";
import "./EditModal.css";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { editCartItem, hideEditModal } from "../../store/actions";
import { getItemIndex } from "../../util/functions";

const EditModal = () => {
  const show = useSelector((state) => state.showEditModal);
  const item = useSelector((state) => state.itemToEdit);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const editRef = createRef();
  const [orderCount, setOrderCount] = useState(1);
  const arr = [40, 41, 42, 43, 44];
  const [selectedSize, setSelectedSize] = useState(40);

  useEffect(() => {
    setOrderCount(item.quantity);
    setSelectedSize(item.size);
  }, [item]);

  const increaseOrder = () => {
    setOrderCount((prev) => prev + 1);
  };

  const decreaseOrder = () => {
    if (orderCount === 1) return;
    setOrderCount((prev) => prev - 1);
  };

  const handleSave = () => {
    const itemIndex = getItemIndex(item, cartItems);
    const updatedItem = {
      id: `${item.product._id}${selectedSize}`,
      product: item.product,
      quantity: orderCount,
      size: selectedSize,
    };
    dispatch(editCartItem(itemIndex, updatedItem));
    dispatch(hideEditModal());
  };

  const onHideModal = (e) => {
    if (!editRef.current.contains(e.target)) {
      dispatch(hideEditModal());
    }
  };

  return (
    <div>
      {show && (
        <section onClick={(e) => onHideModal(e)}>
          <div className="edit__cont"></div>
          <section ref={editRef} className="edit">
            <div className="edit__title">
              <h2>Edit Item</h2>
              <FaTimes
                className="edit__cancel"
                onClick={() => dispatch(hideEditModal())}
              />
            </div>
            <section className="edit__details">
              <img
                className="edit__img"
                src={item.product.images[0]}
                alt={item.product.name}
              />
              <aside className="edit__attributes">
                <div className="edit__size">
                  <h3>Size:</h3>
                  <div className="edit__sizes">
                    {arr.map((val, index) => {
                      return (
                        <div
                          className={`edit__sizes__box ${
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
                <aside className="edit__quantity">
                  <h3>Quantity:</h3>
                  <div className="edit__order">
                    <button onClick={decreaseOrder}>-</button>
                    <p>{orderCount}</p>
                    <button onClick={increaseOrder}>+</button>
                  </div>
                </aside>
                <button onClick={handleSave} className="btn btn--edit">
                  Save
                </button>
              </aside>
            </section>
          </section>
        </section>
      )}
    </div>
  );
};

export default EditModal;
