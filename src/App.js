import { Routes, Route } from "react-router-dom";
import Join from "./resources/Join";
import PhotoGallery from "./resources/PhotoGallery";
import HSChange from "./resources/HSChange";
import Suggestions from "./resources/Suggestions";
import Home from "./Home";
import Navbar from "./Navbar";
import BigLittle from "./about/BigLittle";
import Board from "./about/Board";
import Fams from "./about/Fams";
import MissionValues from "./about/MissionValues";
import CKCalendar from "./calendar/CKCalendar";
import masthead from "./images/White+Masthead.png";
import Register from './Register';
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/gallery" element={<PhotoGallery />}></Route>
          <Route path="/happy_sad_change" element={<HSChange />}></Route>
          <Route path="/suggestions" element={<Suggestions />}></Route>
          <Route path="/big_little" element={<BigLittle />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/fams" element={<Fams />}></Route>
          <Route path="/mission_values" element={<MissionValues />}></Route>
          <Route path="/calendar" element={<CKCalendar />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Container>
        <div className="social-media-icons d-flex justify-content-evenly">
          <a href="https://www.facebook.com/ucsdcirclek/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://discord.gg/RkVte7pATb">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.instagram.com/ucsdcirclek/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </Container>
      <img src={masthead} alt="masthead" className="masthead" />
    </div>
  );
}

export default App;
