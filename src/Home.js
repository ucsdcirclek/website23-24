import './Home.css';
import grouppic from "./images/group-photo-cki.jpeg"
import masthead from "./images/White+Masthead.png"

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
        <p> Upcoming Events Calendar her! (up to 2 weeks)</p>
      </div>
      <div className = "join-info">
        <div className = "join">
          <p> Want to join?</p>
          <button className = "join-button"> Click here!</button>
        </div>
        <div className = "info">
          <p> Want to learn more about Circle K International?</p>
          <button className = "join-button"> Click here!</button>
        </div>
      </div>
      <img src = {masthead} alt = "masthead" className = "masthead"/>
    </div>
  );
}

export default Home;
