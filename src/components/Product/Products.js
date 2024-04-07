import React from "react";
import Product from "../Product/Product";
import "./Product.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product   
          id="1"
          title="Overhead Tripod with Ring Light, Desk Camera Mount with Flexible Arm, Bendable Phone Arm with Clamp for Nail Art Jewelry Video Recording Cookie Decorating"
          image="https://m.media-amazon.com/images/I/61rbY04vHdL._AC_UL480_FMwebp_QL65_.jpg"
          rating={3}
          price="$27.00"
        />
        <Product
          id="2"
          title="J-Tech Digital V638R Ergonomic Wired Mouse, 4 DPI Settings, RGB LED Variations, Magnetic Removable Palm Rest, 6 Button Functions, 1 Year Manufacturer Replacement Warranty"
          image="https://m.media-amazon.com/images/I/71UfPEcyE1L._AC_UL480_FMwebp_QL65_.jpg"
          price="$22"
          rating={5}
          
        />
        
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Quest 3 128GB— Breakthrough Mixed Reality — Powerful Performance — Asgards Wrath 2 Bundle"
          image="https://m.media-amazon.com/images/I/81whTB488bL._AC_UL480_FMwebp_QL65_.jpg"
          price="$499"
          rating={6}
          
        />
        <Product
          id="1"
          title="3-in-1 PC Gaming Headphone & Controller Holder - EURPMASK Headphone Hanger w/Adjustable Clamp&Rotating Arm,Headset Stand Under Desk Controller Stand WH"
          image="https://m.media-amazon.com/images/I/61XBfQu5VcL._AC_UL480_FMwebp_QL65_.jpg"
          price="$16"
          rating={2}
        />
      </div>
    </>
  );
};

export default Products;
