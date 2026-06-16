import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow border-0 p-4" style={{ width: "450px" }}>
        <h2 className="text-center fw-bold mb-4">
          Create Account
        </h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
        />

        <input
          type="tel"
          className="form-control mb-3"
          placeholder="Phone Number"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
        />

        <button className="btn btn-warning w-100">
          Create Account
        </button>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;