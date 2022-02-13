import React from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { hideSidebar } from "../../store/actions";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.showSidebar);
  const dispatch = useDispatch();

  return (
    <aside className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <FaTimes
        className="sidebar__cancel"
        onClick={() => dispatch(hideSidebar())}
      />
      <nav>
        <ul>
          <li>
            <Link onClick={() => dispatch(hideSidebar())} to="/">
              Products
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(hideSidebar())} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1>BATA</h1>
    </aside>
  );
};

export default Sidebar;
