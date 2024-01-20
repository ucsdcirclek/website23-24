import "./Navbar.css";
import { Link } from "react-router-dom";
import ckilogo from "./images/ckilogo.png";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="cki-logo" src={ckilogo} alt="ckilogo" />
          Circle K at UCSD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="about-div">
            <button className="about-btn">About</button>
            <div className="about-menu">
              <Link to="/mission_values">Our Mission!</Link>
              <Link to="/board">Board</Link>
              <Link to="/big_little">Big Little</Link>
              <Link to="/fams">Fams</Link>
            </div>
          </div>
          <Link className="calendar-btn" to="/calendar">
            Calendar
          </Link>
          <div className="resources-div">
            <button className="resources-btn">Resources</button>
            <div className="resources-menu">
              <Link to="/happy_sad_change">Happy Sad Change</Link>
              <Link to="/gallery">Photo Gallery</Link>
              <Link to="/join">Want to Join?</Link>
              <Link to="/suggestions">Suggestions</Link>
            </div>
          </div>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
