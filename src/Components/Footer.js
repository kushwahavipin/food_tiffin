import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_main">
        <div className="footer_tag">
          <h2>Location</h2>
          <p>India</p>
        </div>

        <div className="footer_tag">
          <h2>Quick Link</h2>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Gallary</p>
          <p>Order</p>
        </div>

        <div className="footer_tag">
          <h2>Contact</h2>
          <p>+91 7081493932</p>

          <p>kushwahavipin786@gmail.com</p>
        </div>

        <div className="footer_tag">
          <h2>Our Service</h2>
          <p>Fast Delivery</p>
          <p>Easy Payments</p>
          <p>24 x 7 Service</p>
        </div>

        <div className="footer_tag">
          <h2>Follows</h2>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>

      <p class="end">
        Design by
        <span>
          <i class="fa-solid fa-face-grin"></i> Vipin Kushwaha
        </span>
      </p>
    </footer>
  );
};

export default Footer;
