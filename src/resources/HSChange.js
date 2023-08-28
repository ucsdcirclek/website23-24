import "./HSChange.css"
import qrcode from "../images/misc/hsqrcode.jpeg"

function HSChange() {
    return (
      <div class = "items">
        <h1 className = "HSChange"> Happy Sad Change!</h1>
        <img src = {qrcode}></img>
        <div class = "paragraphs">
          <p class = "about">We support the organization Pediatric Trauma Program (PTP)!</p>
          <p class = "venmo">Venmo: @UcsdCircleK</p>
        </div>
      </div>
    );
  }
  
  export default HSChange;