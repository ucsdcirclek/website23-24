import "./Navbar.css";
import { Link } from "react-router-dom";
import ckilogo from "./images/ckilogo.png";

function Navbar() {
  return (
    <div class="main">
        <img class="cki-logo" src={ckilogo} alt="ckilogo" />
        <Link class = "welcome-message" to="/">Circle K at UCSD</Link>
        <div class="about">
          <button class="about-btn">About</button>
          <div class="about-menu">
            <Link to="/mission_values">Mission/Values</Link>
            <Link to="/board">Board</Link>
            <Link to="/big_little">Big/Little</Link>
            <Link to="/fams">Mission/Values</Link>
          </div>
        </div>
        <Link class="calendar-btn" to ="/calendar">Calendar</Link>
        <div class="resources">
          <button class="resources-btn">Resources</button>
          <div class="resources-menu">
            <Link to="/happy_sad_change">Happy Sad Change</Link>
            <Link to="/gallery">Photo Gallery</Link>
            <Link to="/join">How to Join?</Link>
            <Link to="/suggestions">Suggestions</Link>
          </div>
        </div>
        <button class="login-btn">Login</button>
    </div>
  );
}

export default Navbar;
