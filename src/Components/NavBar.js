import React from "react";
import logo from "./image/logo1.png";

const NavBar = () => {
  return (
    <>
      <section id="Home">
        <nav>
          <div class="logo">
            <img src={logo} />
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

          <div class="icon">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
