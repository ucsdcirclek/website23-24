import './Main.css';
import grouppic from "./images/group-photo-cki.jpeg"
import masthead from "./images/White+Masthead.png"
import Header from './Header';

function Main() {
  return (
    <div className="Main">
      <Header></Header>
      <container class = "group-container">
        <img class = "group-pic" src = {grouppic} alt = "group-pic"/>
      </container>
      <div class = "about-cki">
        <p class = "question">What is Circle K?</p>
        <p>Circle K International is the largest collegiate service organization worldwide, with over 13,000 members and 500 chapters!
          We host all kinds of community service, social events, and more every quarter!
        </p>
      </div>
      <div class = "calendar">
        <p> Upcoming Events Calendar her! (up to 2 weeks)</p>
      </div>
      <div class = "join-info">
        <div class = "join">
          <p> Want to join?</p>
          <button class = "join-button"> Click here!</button>
        </div>
        <div class = "info">
          <p> Want to learn more about Circle K International?</p>
          <button class = "join-button"> Click here!</button>
        </div>
      </div>
      <img src = {masthead} alt = "masthead" class = "masthead"/>
    </div>
  );
}

export default Main;
