import React from "react";
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-4">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form className="container">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* {error && <div className="text-danger">{error}</div>} */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
