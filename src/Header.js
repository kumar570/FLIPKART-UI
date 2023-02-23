import React from "react";
import logo from "./flipcartlogo.jpeg";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { fetchCartItems } from "./components/Cart";
import { Login } from "./components/Login";
import { ProductFeed } from "./components/ProductFeed";
import { Cart } from "./components/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="header" style={{ position: "sticky" }}>
      <div className="header_first">
        <img src={logo} alt="flipkart logo" />
      </div>
      <div>
        <img src={logo} style={{ width: "71px" }} />
      </div>
      <div className="header_second">
        <input type="text" placeholder="search for any products or brands.." />
        <SearchIcon />
      </div>
      <div className="header_third">
        <button className="login">
          <a href="../Login">Login</a>
        </button>

        <button
          style={{ padding: "10px" }}
          className="logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="header_fourth">
        <span>More</span>
        <ExpandMoreIcon />
      </div>
      <div className="header_fifth">
        <Link to="/Cart" className="cart">
          <ShoppingCartIcon />
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
