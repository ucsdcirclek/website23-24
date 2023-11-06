import "./BigLittle.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import bl1 from "../images/social/IMG_6982.jpg";
import bl2 from "../images/social/IMG_8351.jpg";
import bl3 from "../images/social/image000001.jpg";

const bigLittleImages = [bl1,bl2,bl3];

function BigLittle() {
  return (
    <div className="BigLittle">
      <div className="mainText">
        <p className="whatIsBL">What is the Big-Little Mentorship Program?</p>
        <p>
          The Big-Little Mentorship Program is your chance to get to meet someone
          in Circle K who you can bond with, hang out with, and grow with. For 
          returning members, they can apply to be bigs and mentor newer members
          in a personal sense. For new members, they can apply to be littles and 
          become closer with their bigs in Circle K!
        </p>
      </div>
      <div className="toBeA">
        <div className="leftSide">
          <p>To be a big, you must meet the following requirements:</p>
          <p>- Dues paying member</p>
          <p>- At least 1 year in Circle K</p>
          <p>- Fill out Big Application</p>
        </div>
        <div className="rightSide">
          <p>To be a little, you must meet the following requirements:</p>
          <p>- Dues paying member</p>
          <p>- Fill out Little Application</p>
        </div>
      </div>
      <div className="photos">
        <p className="photoTitle">Some photos of Bigs & Littles</p>
      <div className="imageGallery">
          {bigLittleImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Big-Little Pic ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BigLittle;
