import "./Fams.css"
import 'react-alice-carousel/lib/alice-carousel.css';
import ccfam from "../images/social/fams/R435029769_alexander_gao_MP1_PROOF_V2 (2)-1.png";
import bbfam from "../images/social/fams/final poster-1.png";

const famsImages = [ccfam, bbfam];
const famNames = [ "Cowabunga Crew", "Bodacious Baddies"]

function Fams() {
  return (
    <div className="Fams">
      <div className="mainText">
        <p className="About_CKI_Fams">What is the Fam System?</p>
        <p>
          Fams are a way for members to attend more personal events with other handpicked members by their fam heads!
          This includes things like socials, fam-only service events, picnics, interfam events and anything else! 
          Also, there will be quarterly interfam competitions, where the most active fam (attending the most events and 
          participating) will receive a prize!
          
        </p>
      </div>
      <div className="FamLogos">
        <p className="famLogoTitle">2023-24 Fams!</p>
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