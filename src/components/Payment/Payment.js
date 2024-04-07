import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingContext from "../../context/Shopping/shoppingContext";
import "./Payment.css";
import CheckoutProduct from "../Checkout/CheckoutProduct";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          {" "}
          Checkout <Link to="./checkout">{basket?.length} item</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 ReactJS Road </p>
            <p>Johannesburg, SA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method </h3>
          </div>
          <div className="payment_delails">
            {/* Stripe code wiill go here*/}
          </div>
          </div>
      </div>
    </div>
  );
};

export default Payment;
