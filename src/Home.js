import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import grouppic from "./images/group-photo-cki.jpeg"
import { Link } from 'react-router-dom';
/*import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
*/

function Home() {
  return (
    <div className="Home">
      <div className = "group-container">
        <img className = "group-pic" src = {grouppic} alt = "group-pic"/>
      </div>
      <div className = "about-cki">
        <p className = "question">What is Circle K?</p>
        <p>Circle K International is the largest collegiate service organization worldwide, with over 13,000 members and 500 chapters!
          Our three tenets are service, leadership and fellowship! We host all kinds of local community service events, social events, and 
          more with other parent organization Kiwanis!
        </p>
      </div>
      <div className = "calendar">
        <p> Upcoming ur mom Calendar here! (up to 2 weeks)</p>
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
