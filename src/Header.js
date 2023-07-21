import "./Header.css";
import ckilogo from "./images/ckilogo.png";

function Header() {
  return (
    <div class = "main">
        <img class = "cki-logo" src = {ckilogo} alt = "ckilogo"/>
        <p class = "welcome-message">Circle K at UCSD</p>
        <div class = "about">
            <button class = "about-btn">About</button>
            <div class = "about-menu">
                <a href = "mission_values">Mission/Values</a>
                <a href = "board">Board</a>
                <a href = "big_little">Big and Little</a>
                <a href = "fams">Fams</a>
            </div>
        </div>
        <button class = "calendar-btn">Calendar</button>
        <div class = "resources">
        <button class = "resources-btn">Resources</button>
            <div class = "resources-menu">
                <a href = "happy_sad_cahnge">Happy Sad Change</a>
                <a href = "gallery">Photo Gallery</a>
                <a href = "join">How to Join?</a>
                <a href = "suggestions">Suggestions</a>
            </div>
        </div>
    </div>
  );
};

export default Header;