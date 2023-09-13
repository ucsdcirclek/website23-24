import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import './Home.css';
import grouppic from "./images/group-photo-cki.jpeg"
import masthead from "./images/White+Masthead.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className = "group-container">
        <img className = "group-pic" src = {grouppic} alt = "group-pic"/>
      </div>
      <div className = "about-cki">
        <p className = "question">What is Circle K?</p>
        <p>Circle K International is the largest collegiate service organization worldwide, with over 13,000 members and 500 chapters!
          We host all kinds of community service, social events, and more every quarter!
        </p>
      </div>
      <div className = "calendar">
        <p> Upcoming Events Calendar here! (up to 2 weeks)</p>
      </div>
      <div className = "join-info">
        <div className = "join">
          <p> Want to join?</p>
          <Link to="/join" className = "button">Click here!</Link>
        </div>
        <div className = "info">
          <p> Want to learn more about Circle K?</p>
          <Link to="/mission_values" className = "button">Click here!</Link>
        </div>
      </div>
      <Container>
        <div className="social-media-icons d-flex justify-content-evenly">
          <a href="https://www.facebook.com/ucsdcirclek/">
            <FontAwesomeIcon icon ={faFacebook}/>
          </a>
          <a href="https://discord.com/invite/Rvr2JEjpaY">
            <FontAwesomeIcon icon ={faDiscord}/>
          </a>
          <a href="https://www.instagram.com/ucsdcirclek/">
            <FontAwesomeIcon icon ={faInstagram}/>
          </a>
        </div>
      </Container>
      <img src = {masthead} alt = "masthead" className = "masthead"/>
    </div>
  );
}

export default Home;
