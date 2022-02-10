import React from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { hideSidebar } from "../../store/actions";

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.showSidebar);
  const dispatch = useDispatch();

  return (
    <aside className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <FaTimes
        className="sidebar__cancel"
        onClick={() => dispatch(hideSidebar())}
      />
      <p>Product</p>
      <p>About</p>
      <p>Login</p>
      <h1>BATA</h1>
    </aside>
  );
};

export default Sidebar;
