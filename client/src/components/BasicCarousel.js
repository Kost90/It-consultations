import "slick-carousel/slick/slick-theme.css";
import "./BasicCarousel.css";
import Slider from "react-slick";
import tripple from "../assets/tripple.jpg";
import law from "../assets/law.jpg";
import it from "../assets/it.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          style={{ height: "500px", width: "700px", maxWidth: "800px"}}
          src={law}
          alt="First slide"
        />
      </div>
      <div>
        <img style={{ height: "500px", width: "100%", maxWidth: "800px"}} src={it} alt="Second slide" />
      </div>
      <div>
        <img style={{ height: "500px", width: "100%", maxWidth: "800px"}} src={tripple} alt="Third slide" />
      </div>
    </Slider>
  );
}
