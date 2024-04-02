import React from "react";
import "./Products.css";

const product = ({ id, image, title, rating, price }) => {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info"></div>
      <p>{title}</p>

      <div className="product_rating">
        <p>{rating}</p>
      </div>
      <p className="product_price">{price}</p>
      <div>
        <button className="product_button">add to buskets</button>
      </div>
    </div>
  );
};

export default product;
