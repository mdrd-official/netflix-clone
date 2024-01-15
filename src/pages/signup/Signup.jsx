import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./signup.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/login")
      alert("Account created successfully")
    } catch (err) {
      setError("Failed to create an account");
      console.error(err);                             
      alert(error);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email} // Add value prop to bind the state
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password} // Add value prop to bind the state
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="registerButton">
            Sign Up
          </button>

          <span>
            Already have an Account?{" "}
            <Link to="/login">
              <b>Login</b>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
