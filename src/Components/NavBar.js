import React from "react";
import logo from "./image/logo1.png";

const NavBar = () => {
  return (
    <>
      <section id="Home">
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo"/>
          </div>

          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Menu">Menu</a>
            </li>
            <li>
              <a href="#Gallary">Gallary</a>
            </li>
            <li>
              <a href="#Review">Review</a>
            </li>
            <li>
              <a href="#Order">Order</a>
            </li>
          </ul>

          <div className="icon">
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
