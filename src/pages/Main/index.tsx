/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

import React, { RefObject, useRef } from "react";
import { Link } from "react-router-dom";
import {
  mainPageHeadLineStyle,
  mainPageIslandStyle1,
  mainPageIslandStyle2,
  mainPageIslandStyle3,
  mainPageIslandStyle4,
  mainPageIslandTitleStyle,
  mainPageLineUpgalleryViewStyle,
  mainPageLogoStyle,
  mainPageMainTitleRowStyle,
  mainPageMainTitleStyle,
  mainPageMapLogoStyle,
  mainPageMapStyle,
  mainPageMapViewStyle,
  mainPageQuickLinkContainerStyle,
  mainPageQuickLinkStyle,
  mainPageStyle,
  mainPageSubTitleStyle,
} from "./.css";
import MainPageLogo from "../../assets/logo/main_page_logo.svg?react";
import MainPageMapLogo from "../../assets/island/main_page_map_logo.svg?react";
import ham_square_island from "../../assets/island/ham_square_island.png";
import memorial_island from "../../assets/island/memorial_island.png";
import mirea_square_island from "../../assets/island/mirea_square_island.png";
import stadium_island from "../../assets/island/stadium_island.png";
import { artistInfoList } from "./artistImport.ts";
import Cerasseal from "./Ceraseal.tsx";
import { Island, IslandItemProps, SliderSettings } from "../../shared/types/mainPage.ts";
import routerInfo from "../../shared/routing/routerInfo.ts";
import { routerInfoType } from "../../shared/types/routing.ts";
import {
  MAP_60TH_URL,
  MAP_HAM_MIREA_URL,
  MAP_HAM_URL,
  MAP_STADIUM_URL,
} from "../../shared/mainPageConst.ts";

/**
 * 캐러셀 컴포넌트를 사용하기 위한 설정.
 */
const settings: SliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2500,
};

/**
 * 메인페이지에 있는 섬들의 정보를 저장한 배열.
 * 가나다순으로 정렬됩니다.
 */
const islandList: Island[] = [
  { name: "함인섭 광장", image: ham_square_island, style: mainPageIslandStyle1, url: MAP_HAM_URL },
  { name: "60주년 기념관", image: memorial_island, style: mainPageIslandStyle2, url: MAP_60TH_URL },
  {
    name: "미래광장",
    image: mirea_square_island,
    style: mainPageIslandStyle3,
    url: MAP_HAM_MIREA_URL,
  },
  { name: "대운동장", image: stadium_island, style: mainPageIslandStyle4, url: MAP_STADIUM_URL },
].sort((a, b) => a.name.localeCompare(b.name));

/**
 * 메인페이지의 타이틀을 보여주는 컴포넌트.
 */
const MainTitle: React.FC = () => (
  <div className={mainPageMainTitleStyle}>
    <h1>2024 강원대학교</h1>
    <div className={mainPageMainTitleRowStyle}>
      {"백령대동제".split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  </div>
);

/**
 * 메인페이지의 서브 타이틀을 보여주는 컴포넌트.
 */
const SubTitle: React.FC = () => (
  <div className={mainPageSubTitleStyle}>
    <h3>2024.9.23(월) ~ 9.26(목)</h3>
    <br />
    <p>강원대학교 춘천캠퍼스</p>
  </div>
);

/**
 * 메인페이지의 퀵링크를 보여주는 컴포넌트.
 * 지도의 경우 ref를 사용하여 해당 섹션으로 스크롤링합니다.
 * 나머지는 routerInfo를 사용하여 라우팅합니다.
 * @param mapSectionRef
 */
const QuickLink: React.FC<{ mapSectionRef: RefObject<HTMLDivElement> }> = ({ mapSectionRef }) => {
  const scrollToMapSection = () => {
    // console.log(mapSectionRef);
    mapSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={mainPageQuickLinkContainerStyle}>
      <p className={mainPageQuickLinkStyle} onClick={scrollToMapSection}>{`지도→`}</p>
      {routerInfo
        .filter((info: routerInfoType) => info.mainPage)
        .sort((a: routerInfoType, b: routerInfoType) => a.korean.localeCompare(b.korean))
        .map((info: routerInfoType) => (
          <Link key={info.path} to={info.path}>
            <p className={mainPageQuickLinkStyle}>{`${info.korean}→`}</p>
          </Link>
        ))}
    </div>
  );
};

/**
 * 메인페이지의 섬을 보여주는 컴포넌트.
 * 인덱스가 홀수일 경우 오른쪽에 위치하도록 설정합니다.
 * @see islandList
 * @param name 섬의 이름
 * @param image 섬의 이미지
 * @param style 섬의 스타일(떠다니는 효과를 위해 개별 적용됨)
 * @param url 섬의 경로
 * @param index 섬의 인덱스
 */
const IslandItem: React.FC<IslandItemProps> = ({ name, image, style, url, index }) => {
  const isRight = index % 2 !== 0;

  const content = [
    <img key="image" src={image} alt={name} className={style} />,
    <p key="name" className={`${mainPageIslandTitleStyle} ${isRight ? "right" : "left"}`}>
      {name}
    </p>,
  ];

  return (
    <Link className={mainPageMapStyle} to={url}>
      {isRight ? content : content.reverse()}
    </Link>
  );
};

/**
 * 메인페이지의 메인 컴포넌트.
 */
export default function Main() {
  const mapSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className={mainPageStyle}>
      {/*첫 제목 파트*/}
      <MainTitle />
      <SubTitle />

      {/*바로가기 파트*/}
      <QuickLink mapSectionRef={mapSectionRef} />

      {/*첫번째 로고*/}
      <MainPageLogo className={mainPageLogoStyle} />

      {/*라인업 파트*/}
      <h3>라인업</h3>
      <hr className={mainPageHeadLineStyle} />
      <div className={mainPageLineUpgalleryViewStyle}>
        <Cerasseal infoList={artistInfoList} settings={settings} />
      </div>

      {/*지도 파트*/}
      <h3 ref={mapSectionRef}>축제 지도</h3>
      <hr className={mainPageHeadLineStyle} />
      <p className={mainPageSubTitleStyle}>장소를 탭하면 세부 지도를 볼 수 있어요 </p>
      <MainPageMapLogo className={mainPageMapLogoStyle} />
      <div className={mainPageMapViewStyle}>
        {islandList.map((island, idx) => (
          <IslandItem key={island.name} {...island} index={idx} />
        ))}
      </div>
    </div>
  );
}
