import { useState, useRef } from "react";
import "./landing.scss";

export default function Landing() {
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setEmail(
      "Welcome to the Netflix Clone using React.JS, Firebase and TMDB API"
    );
    emailRef.current.focus();
  };
  return (
    <div className="register">
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          <b>Ready to watch?</b> Click get Started to show the technologies used.
        </p>

        <div className="input">
          <input
            type="email"
            value={email}
            placeholder="Hey there! Welcome to Netflix Clone"
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
          <button onClick={handleClick} className="registerButton">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
