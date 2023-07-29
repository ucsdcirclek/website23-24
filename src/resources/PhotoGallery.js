import "./PhotoGallery.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import wk6cats from "../images/service/fa22_wk6_cats.jpg"
import wk7interclub from "../images/service/fa22_wk7_interclub.jpg"
import wk8painting from "../images/service/wi23_wk8_painting.JPG"


const handleDragStart = (e) => e.preventDefault();
const items = [
  <img class = "img" src= {wk6cats} onDragStart={handleDragStart} role="presentation" />,
  <img class = "img" src= {wk7interclub} onDragStart={handleDragStart} role="presentation" />,
  <img class = "img" src= {wk8painting} onDragStart={handleDragStart} role="presentation" />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function PhotoGallery() {
    return (
      <div class = "gallery-main">
          <p className = "gallery"> Photo Gallery!</p>
          <AliceCarousel mouseTracking items={items}/>
          <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </div>
    );
  }
  
  export default PhotoGallery;