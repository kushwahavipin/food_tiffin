import React from 'react';
import MainPage from "./image/main_img.png";
import logo from "./image/tif_logo.png";



const HomePage = () => {
    
  return (
    <section id="Home">
    <nav>
        <div className="logo">
            <img src={logo}/>
        </div>

        <ul>
        
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Gallary">Gallary</a></li>
            <li><a href="#Review">Review</a></li>
            <li><a href="#Order">Order</a></li>
        </ul>

        <div className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            
            <i className="fa fa-user" aria-hidden="true"></i>
            
        </div>

    </nav>

    <div className="main">
        <div className="men_text">
            <h1>Get Fresh<span>Tiffin</span> in a Easy Way</h1>
        </div>

        <div className="main_image">
            <img src={MainPage}/>
        </div>

    </div>

    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reiciendis quaerat nobis 
        deleniti amet non inventore. Reprehenderit recusandae voluptatibus minus tenetur itaque numquam 
        cum quos dolorem maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur adipisicing 
        elit. Cumque facilis, quaerat cupiditate nulla quibusdam quo sunt esse tempore inventore vel 
        voluptate, amet laudantium adipisci veniam nihil quam molestiae omnis mollitia.
    </p>

    <div className="main_btn">
        <a href="#">Order Now</a>
        <i className="fa-solid fa-angle-right"></i>
    </div>

</section>
     
  );
}

export default HomePage;
