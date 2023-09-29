import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../ImageCarousel.css'; // Create this CSS file for custom styling

const ImageCarousel = ({ images }) => {
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`}  />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
