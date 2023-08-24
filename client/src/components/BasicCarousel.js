// import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from "react-bootstrap/Carousel";
import "./BasicCarousel.css";
import tripple from "../assets/tripple.jpg";
import law from "../assets/law.jpg";
import it from "../assets/it.jpg";

const BasicCarousel = () => {
  return (
    <>
      <div className="container">
        <div className="p=5">
          <Carousel interval={5000}>
            <Carousel.Item>
              <img
                style={{ maxHeight: "45vh" }}
                className="d-block w-100"
                src={law}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First Pancake Image Title</h3>
                <p>First Slide decription.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ maxHeight: "45vh" }}
                className="d-block w-100"
                src={it}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide Image </h3>
                <p>Second slide description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ maxHeight: "45vh" }}
                className="d-block w-100"
                src={tripple}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third Slide Image</h3>
                <p>Third Slide Description.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default BasicCarousel;
