import Slider from "react-slick";
import { mainPageArtistImageStyle } from "./.css.ts";

function Cerasseal(props: { imgList: string[] }) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {props.imgList.map((img, index) => (
          <div key={index}>
            <img src={img} className={mainPageArtistImageStyle} alt="artist" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Cerasseal;