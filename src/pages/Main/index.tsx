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

const settings: SliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 2000,
};

const islandList: Island[] = [
  { name: "함인섭 광장", image: ham_square_island, style: mainPageIslandStyle1 },
  { name: "60주년 기념관", image: memorial_island, style: mainPageIslandStyle2 },
  { name: "미래광장", image: mirea_square_island, style: mainPageIslandStyle3 },
  { name: "대운동장", image: stadium_island, style: mainPageIslandStyle4 },
].sort((a, b) => a.name.localeCompare(b.name));

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

const SubTitle: React.FC = () => (
  <div className={mainPageSubTitleStyle}>
    <h3>2024.9.23(월) ~ 9.26(목)</h3>
    <br />
    <p>강원대학교 춘천캠퍼스</p>
  </div>
);

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

const IslandItem: React.FC<IslandItemProps> = ({ name, image, style, index }) => {
  const isRight = index % 2 !== 0;

  const content = [
    <img key="image" src={image} alt={name} className={style} />,
    <p key="name" className={`${mainPageIslandTitleStyle} ${isRight ? "right" : "left"}`}>
      {name}
    </p>,
  ];

  return (
    <Link className={mainPageMapStyle} to="/">
      {isRight ? content : content.reverse()}
    </Link>
  );
};

export default function Main() {
  const mapSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className={mainPageStyle}>
      <MainTitle />
      <SubTitle />
      <QuickLink mapSectionRef={mapSectionRef} />
      <MainPageLogo className={mainPageLogoStyle} />
      <h3>라인업</h3>
      <hr className={mainPageHeadLineStyle} />
      <div className={mainPageLineUpgalleryViewStyle}>
        <Cerasseal infoList={artistInfoList} settings={settings} />
      </div>

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
