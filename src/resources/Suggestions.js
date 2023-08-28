import "./Suggestions.css"
import akhil from "../images/misc/akhil.jpeg"

function Suggestions() {
    return (
    <div class = "sug">
      <h1 className = "suggestions"> Have any suggestions? E-mail us at <a class = "email" href ="mailto:technology@ucsdcki.org">technology@ucsdcki.org</a>
      </h1>
      <img src = {akhil} alt ="akhil"></img>
    </div>
    );
    
  }
  
  export default  Suggestions;