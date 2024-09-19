import Slider from "react-slick";
import { mainPageArtistImageStyle } from "./.css.ts";
import { SliderSettings } from "../../shared/types/mainPage.ts";

interface SliderComponentProps {
  imgList: string[];
  settings: SliderSettings;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ imgList, settings }) => {
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

export default SliderComponent;
