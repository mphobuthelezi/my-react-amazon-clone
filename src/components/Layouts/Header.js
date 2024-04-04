import { useContext } from "react";
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../../context/authContext";
import ShoppingContext from "../../context/Shopping/shoppingContext";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket } = shoppingContext;

  const ctx = useContext(AuthContext);
  return (
    <header className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>

      <div className="header_nav">
        {ctx.isLoggedIn ? (
          <Link to="/">
            <div className="header_option" onClick={ctx.onLogout}>
              <span className="header_optionOne">Hello User</span>
              <span className="header_optionTwo">Sign Out</span>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="header_option">
              <span className="header_optionOne">Hello Guests</span>
              <span className="header_optionTwo">Sign In</span>
            </div>
          </Link>
        )}
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon className="basket_icon" />
          <span className="header_optionTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;