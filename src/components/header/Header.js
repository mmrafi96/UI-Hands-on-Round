import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_app">
      <Link to="/" className="logo">
        <img src="./logo192.png" alt="" />
      </Link>
      <input type="text" placeholder="Search" />
      <div className="profile">
        <Link to="/cart">
          <ShoppingCartIcon style={{ color: "#cb8f77" }} />
        </Link>
        <Link to="/login">
          <AccountCircleIcon style={{ color: "#cb8f77", paddingLeft: 20 }} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
