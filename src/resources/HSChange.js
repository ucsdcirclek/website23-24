import "./HSChange.css"
import qrcode from "../images/misc/hsqrcode.jpeg"

function HSChange() {
    return (
      <div class = "items">
        <h1 className = "HSChange"> Happy Sad Change!</h1>
        <p class = "venmo">Venmo: @UCSDCircleK</p>
        <img src = {qrcode} alt="HSChange"></img>
        <p class = "about">All proceeds go towards the <a href="https://www.cnhfoundation.org/how-to-help/h2h-pediatric-trauma-program/">Pediatric Trauma Program (PTP)!</a></p>
      </div>
    );
  }
  
  export default HSChange;