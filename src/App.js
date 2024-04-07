import "./App.css";
import {useContext, useEffect} from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Product/Products";
import Header from "./components/Layouts/Header";
import ProductsDetails from "./components/Product/ProductsDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound"
import ShoppingContext from "./context/Shopping/shoppingContext";
import { auth } from "./components/Firebase";
import Checkout from "./components/Checkout/Checkout";
import  Payment  from "./components/Payment/Payment";

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductsDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/notfound">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
