import "./PhotoGallery.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import wk6cats from "../images/service/fa22_wk6_cats.jpg"
import wk7interclub from "../images/service/fa22_wk7_interclub.jpg"
import wk8painting from "../images/service/wi23_wk8_painting.JPG"
import wk1painting from "../images/service/fa22_wk1_painting.jpg"
import wk1beach from "../images/service/fa22_wk1_beachclean.jpg"
import wk1canes from "../images/social/fa22_wk1_canes.JPG"
import wk5farm from "../images/social/fa22_wk5_farm.jpg"




const handleDragStart = (e) => e.preventDefault();
const serviceItems = [
  <img class = "img" src= {wk6cats} onDragStart={handleDragStart} alt="cats" />,
  <img class = "img" src= {wk7interclub} onDragStart={handleDragStart} alt="interclub"  />,
  <img class = "img" src= {wk8painting} onDragStart={handleDragStart} alt="painting"  />,
  <img class = "img" src= {wk1painting} onDragStart={handleDragStart} alt="painting"  />,
  <img class = "img" src= {wk1beach} onDragStart={handleDragStart} alt="beach"  />,

];

const socialItems = [
  <img class = "img" src= {wk1canes} onDragStart={handleDragStart} alt="canes" />,
  <img class = "img" src= {wk5farm} onDragStart={handleDragStart} alt="farm" />
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function PhotoGallery() {
    return (
      <div class = "gallery-main">
          <p class = "service-header">Service Events!</p>
          <AliceCarousel mouseTracking items={serviceItems} responsive={responsive} autoPlay ={true} infinite = {true} 
          autoPlayInterval = {3200}/>
          <p class = "social-header">Social Events!</p>
          <AliceCarousel mouseTracking items={socialItems} responsive={responsive} autoPlay ={true} infinite = {true} 
          autoPlayInterval = {3200}/>
      </div>
    );
  }
  
  export default PhotoGallery;