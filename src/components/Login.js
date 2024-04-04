import React, { useEffect, useReducer, useState, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";
import AuthContext from "../context/authContext";

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
  const ctx = useContext(AuthContext);
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
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email:", state.emailValue);
    console.log("Entered Password:", state.passwordValue);
    ctx.onLogin(state.emailValue, state.passwordValue);
  };

  return (
    <div className="Login">
      <Link to="/">
        <img
           className="Login_logo"
          src="http://my.linefor.com/wp-content/uploads/2015/08/amazon.png"
          alt="Amazon_logo"
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