/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

import Slider from "react-slick";
import {
  mainPageArtistImageStyle,
  mainPageArtistInfoStyle,
  mainPageArtistMoreInfoIconStyle,
} from "./.css.ts";
import { artistInfoListProps, SliderSettings } from "../../shared/types/mainPage.ts";
import { Link } from "react-router-dom";
import Lottie from "lottie-light-react";
import more_button from "../../assets/more_button.json";

interface SliderComponentProps {
  infoList: artistInfoListProps[];
  settings: SliderSettings;
}

/**
 * 아티스트 정보를 슬라이더로 보여주는 컴포넌트
 * @param infoList 아티스트 정보 리스트(artistImport.ts)
 * @param settings 슬라이더 설정
 */
const SliderComponent: React.FC<SliderComponentProps> = ({ infoList, settings }) => {
  return (
    <Slider {...settings}>
      {infoList.map((info, index) => (
        <div key={index}>
          <img src={info.image} className={mainPageArtistImageStyle} alt="artist" />
          <Link className={mainPageArtistInfoStyle} to={`artist/${info.url}`}>
            {info.name}
            <Lottie className={mainPageArtistMoreInfoIconStyle} animationData={more_button} />
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
