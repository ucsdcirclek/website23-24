import "./HSChange.css"
import qrcode from "../images/misc/hsqrcode.jpeg"

function HSChange() {
    return (
      <div class = "items">
        <h1 className = "HSChange"> Happy Sad Change!</h1>
        <img className = "HSPic" src = {qrcode} alt="HSChange"></img>
        <p class = "about">All proceeds go towards the <a href="https://www.marchofdimes.org/">March of Dimes!</a> March of Dimes is a 
        United States nonprofit organization that works to improve the health of mothers and babies. They work to prevent birth defects and premature birth.</p>
      </div>
    );
  }
  
  export default HSChange;