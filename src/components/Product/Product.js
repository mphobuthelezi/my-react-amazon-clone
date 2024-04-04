import React, { useContext } from "react";
import "./Products.css";
import ShoppingContext from "../../context/Shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;
  const addToBasketHandler = () => {
    addToBasket({ item: { id, image, title, rating, price } });
  };
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info"></div>
      <p>{title}</p>

      <div className="product_rating">
        <p>{rating}:star:</p>
      </div>
      <p className="product_price">{price}</p>
      <div>
        <button className="product_button" onClick={addToBasketHandler}>
          add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;