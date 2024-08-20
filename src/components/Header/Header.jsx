import React from "react";
import "./Header.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import shopindia from "../Assets/shopindia.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Header = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="brandName">
        <img className="brandPNG" src={shopindia} alt="" />
        ShopIndia
      </div>
      <ul className="navMenu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{color:'white',   textDecoration: 'none'}} to="/">Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{color:'white', textDecoration: 'none'}} to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{color:'white', textDecoration: 'none'}} to="/men">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{color:'white', textDecoration: 'none'}} to="/women">Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
      </ul>

      <ul className="cartuser">
        <li >
          <Link style={{color:'white', textDecoration: 'none'}} to="/cart">
           <spam className="cart"><FaShoppingCart /> Cart</spam> 
          </Link>
        </li>
        <li >
          <Link style={{color:'white', textDecoration: 'none'}} to="/signIn">
            <spam className="user"><FaUser /> Sign In</spam>
          </Link>
        </li>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </ul>
    </div>
  );
};

export default Header;
