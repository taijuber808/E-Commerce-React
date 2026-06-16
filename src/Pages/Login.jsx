import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow border-0 p-4" style={{ width: "400px" }}>
        <h2 className="text-center fw-bold mb-4">Login</h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-warning w-100">
          Login
        </button>

        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;