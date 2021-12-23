import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";

function Home(props) {
  const [login, setLogin] = useState("login");
  return (
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

export default Home;
