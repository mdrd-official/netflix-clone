import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const userLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
      throw error;
    }
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        {user ? (
          <>
            <div className="left">
              <Link to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                  alt="Netflix Logo"
                />
              </Link>
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
            </div>
            <div className="right">
              <Search className="icon" />
              <span>{user.email}</span>
              <Notifications className="icon" />
              <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <div className="profile">
                <ArrowDropDown className="icon" />
                <div className="options">
                  <span>Settings</span>
                  <button onClick={userLogout}>logout</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="left">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
              />
            </div>
            <div className="right">
              <Link to="/login">
                <button className="loginButton">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="registerButton">Sign Up</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
