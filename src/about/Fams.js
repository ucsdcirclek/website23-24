import "./Fams.css"
import 'react-alice-carousel/lib/alice-carousel.css';
import wk6cats from "../images/service/fa22_wk6_cats.jpg";
import wk7interclub from "../images/service/fa22_wk7_interclub.jpg";

const famsImages = [wk6cats, wk7interclub];
const famNames = ["Bodacious Baddies", "Cowabunga Crew"]

function Fams() {
  return (
    <div className="Fams">
      <div className="mainText">
        <p className="About CKI Fams!">What are fams?</p>
        <p>
          What are Fams? Hell if I know, mine died about 3 days in. Well in all seriousness, maybe Jason & Jennie can
          save me soon with a better description of "fams". But here I go- fams are a way to increase club engagment and provide 
          a more personal bonding experience in Circle K. Fam heads choose Circle K members to be join their fams, each with their own theme and name. 
          Each fam has two "fam heads", who plan activities for the fam to do together. Each fam was also go head to head in friendly inter-fam competitions(?).
        </p>
      </div>
      <div className="FamLogos">
        <p className="famLogoTitle">2023-24 Fams</p>
        <div className="famNames">
          {famNames.map((name, index) => (
            <p key={index} className="famName">{name}</p>
          ))}
        </div>
        <div className="famLogos">
          {famsImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Fams Pic ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
  
  export default Fams;