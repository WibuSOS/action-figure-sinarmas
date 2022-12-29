import Carousel from 'react-bootstrap/Carousel';
import { ASSETS_DIR } from '../../const';

function Banner() {
  return (
    <Carousel>
        <Carousel.Item interval={1000}>
            <img
                className="d-block w-100"
                src={ASSETS_DIR +"/Banner1.jpg.webp"}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
                src={ASSETS_DIR +"/Banner2.jpg.webp"}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
                src={ASSETS_DIR +"/Banner3.jpg.webp"}
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
                src={ASSETS_DIR +"/Banner4.jpg.webp"}
                alt="Four slide"
            />
        </Carousel.Item>
    </Carousel>
  );
}

export default Banner;