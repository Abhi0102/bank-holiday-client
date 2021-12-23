import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

function Home(props) {
  const [login, setLogin] = useState("login");
  const { authProgress, isLoggedIn } = props.auth;
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  // location.state?.from?.pathname ||

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [isLoggedIn]);
  return authProgress || isLoggedIn ? (
    <div className="spinner-border text-primary spin-pos" role="status">
      {" "}
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    // authProgress || isLoggedIn ? (
    //     <div className="spinner-border text-primary" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </div>
    //   ) :
    <>
      <div className="container">
        <button
          className="btn btn-primary margin-5-pct"
          onClick={() => setLogin("login")}
        >
          Login
        </button>{" "}
        &nbsp;
        <button
          className="btn btn-primary margin-5-pct"
          onClick={() => setLogin("signup")}
        >
          Signup
        </button>
      </div>

      {login === "login" ? <Login /> : <Signup />}
    </>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Home);
