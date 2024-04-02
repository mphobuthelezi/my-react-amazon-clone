import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Product/Products";
import Header from "./components/Layouts/Header";
import ProductsDetails from "./components/Product/ProductsDetails";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
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
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
