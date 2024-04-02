import React from "react";
import "./Home.css";
import Products from "../Product/Products";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://cdn.andnowuknow.com/mainStoryImage/amazon_newstore_111119.png?2elFDH.NARL3RqUKy0Nq2e.e1THgJeWI"
            alt="Hero img"
          />
          <Products />
        </div>
      </div>
    </div>
  );
};
export default Home;
