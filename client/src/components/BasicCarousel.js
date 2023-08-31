import "slick-carousel/slick/slick-theme.css";
import "./BasicCarousel.css";
import Slider from "react-slick";
import expertFirst from '../assets/experts/Photo-member2.png'
import expertSecond from '../assets/experts/Photo-member3.png'
import expertThird from '../assets/experts/Photo-member4.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={expertFirst} alt="First slide"/>
      </div>
      <div>
        <img  src={expertSecond} alt="Second slide" />
      </div>
      <div>
        <img src={expertThird} alt="Third slide" />
      </div>
    </Slider>
  );
}
