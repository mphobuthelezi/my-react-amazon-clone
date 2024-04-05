import { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";
// import { type } from "@testing-library/user-event/dist/type";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  //Selectors
  const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0);
  };
  const addToBasket = async (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  const setUser = (user) => {
    dispatch({
      type: "SERT_USER",
      payload: user, 
    });
  };



  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
