import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import grouppic from "./images/group-photo-cki.jpeg"
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
    </div>
  );
}

export default Home;
