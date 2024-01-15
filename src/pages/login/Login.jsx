import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Failed to log in");
    }
  }

  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit" className="loginButton">Sign In</button>
          <span>
  New to Netflix? <b><Link to="/signup">Signup</Link></b>
</span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}