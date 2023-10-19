import "./Navbar.css";
import { Link } from "react-router-dom";
import ckilogo from "./images/ckilogo.png";

function Navbar() {
  return (
    <div className="main">
        <img className="cki-logo" src={ckilogo} alt="ckilogo" />
        <Link className = "welcome-message" to="/">Circle K at UCSD</Link>
        <div className="about-div">
          <button className="about-btn">About</button>
          <div className="about-menu">
            <Link to="/mission_values">Mission/Values</Link>
            <Link to="/board">Board</Link>
            <Link to="/big_little">Big/Little</Link>
            <Link to="/fams">Fams</Link>
          </div>
        </div>
        <Link className="calendar-btn" to ="/calendar">Calendar</Link>
        <div className="resources-div">
          <button className="resources-btn">Resources</button>
          <div className="resources-menu">
            <Link to="/happy_sad_change">Happy/Sad Change</Link>
            <Link to="/gallery">Photo Gallery</Link>
            <Link to="/join">How to Join?</Link>
            <Link to="/suggestions">Suggestions</Link>
          </div>
        </div>
        <Link to="/login" className="login-btn">Login</Link>
    </div>
  );
}

export default Navbar;
