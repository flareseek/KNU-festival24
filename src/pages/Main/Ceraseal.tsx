import Slider from "react-slick";
import { mainPageArtistImageStyle } from "./.css.ts";

const Cerasseal = ({ imgList, settings }) => {
  console.log(settings);
  return (
    <Slider {...settings}>
      {imgList.map((img, index) => (
        <div key={index}>
          <img src={img} className={mainPageArtistImageStyle} alt="artist" />
        </div>
      ))}
    </Slider>
  );
};

export default Cerasseal;
