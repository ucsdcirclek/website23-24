import "./BigLittle.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import wk6cats from "../images/service/fa22_wk6_cats.jpg";
import wk7interclub from "../images/service/fa22_wk7_interclub.jpg";
import wk8painting from "../images/service/wi23_wk8_painting.JPG";

const bigLittleImages = [wk6cats, wk7interclub, wk8painting];

function BigLittle() {
  return (
    <div className="BigLittle">
      <div className="mainText">
        <p className="whatIsBL">What is the Big-Little Mentorship Program?</p>
        <p>
          What is our Big/Little program? I'm not sure how to describe it.
          Hopefully Jennie & Jason can send me something soon to explain it
          better. The best way I can put it is.... hmm. Well, a new member
          would become a "little", while a returning member would be a "big".
          It is sort of a program to connect members in a way that they can
          help each other out.
        </p>
      </div>
      <div className="toBeA">
        <div className="leftSide">
          <p>To be a big, you must meet the following requirements:</p>
          <p>- Due paying member</p>
          <p>- At least 1 year in Circle K?</p>
          <p>- Fill out Big Application</p>
        </div>
        <div className="rightSide">
          <p>To be a little, you must meet the following requirements:</p>
          <p>- Due paying member</p>
          <p>- Fill out Little Application</p>
        </div>
      </div>
      <div className="photos">
        <p className="photoTitle">Some photos of Bigs & Littles</p>
      <div className="imageGallery">
          {bigLittleImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Big-Little Image ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BigLittle;
