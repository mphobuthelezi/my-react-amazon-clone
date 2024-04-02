import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";

const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }

  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }
  return { emailValue: "", passwordValue: "" };
};

const Login = () => {
  const [FormIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });

  const { emailValue: email, passwordValue: password } = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FOR VALIDITY");
      setFormIsValid(email.includes("@") && password.trim().length > 6);
    }, 500);

    return () => {
      console.log("CLEANUP FUNCTION BEFORE NEXT SIDE EFFECT");
      clearTimeout(identifier);
    };
  }, [email, password]);

  const emailChangeHandler = (e) => {
    // setEmail(e.target.value);
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    // setPassword(e.target.value);
    dispatch({ type: "PASSWORD_INPUT", payload: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email:", state.emailValue);
    console.log("Entered Password:", state.passwordValue);
  };

  return (
    <div className="Login">
      <Link to="/">
        <img
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fimage-260nw-2300329721.jpg&tbnid=7AkN_WZH7PlqSM&vet=12ahUKEwjDzMvVwZyFAxUARKQEHV_WBEgQMygQegQIARBX..i&imgrefurl=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F480513%2Famazon&docid=IeFY5Y8_qnpdQM&w=557&h=280&q=amazon%20logo%20svg&ved=2ahUKEwjDzMvVwZyFAxUARKQEHV_WBEgQMygQegQIARBX"
          alt="Amazon_logo"
          className="Login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={state.emailValue}
            onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input
            type="text"
            value={state.passwordValue}
            onChange={passwordChangeHandler}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon fake clone conditions of Use &
          Sale. Please see our Privacy Notice, Our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;