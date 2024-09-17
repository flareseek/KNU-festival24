import React from "react";
import { Link } from "react-router-dom";
import {
  mainPageStyle,
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
  mainPageSubTitleStyle,
} from "./.css";
import MainPageLogo from "../../assets/main_page_logo.svg?react";
import MainPageMapLogo from "../../assets/main_page_map_logo.svg?react";
import ham_square_island from "../../assets/ham_square_island.png";
import memorial_island from "../../assets/memorial_island.png";
import mirea_square_island from "../../assets/mirea_square_island.png";
import stadium_island from "../../assets/stadium_island.png";
import Cerasseal from "./Ceraseal.tsx";

interface Island {
  name: string;
  image: string;
  style: string;
}

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

interface IslandItemProps extends Island {
  index: number;
}

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
  return (
    <div className={mainPageStyle}>
      <MainTitle />
      <SubTitle />
      <MainPageLogo className={mainPageLogoStyle} />

      <h3>라인업</h3>
      <div className={mainPageLineUpgalleryViewStyle}>
        <Cerasseal imgList = {[ham_square_island, mirea_square_island]} />
      </div>

      <h3>축제 지도</h3>
      <MainPageMapLogo className={mainPageMapLogoStyle} />
      <div className={mainPageLineUpgalleryViewStyle}>
        {islandList.map((island, idx) => (
          <IslandItem key={island.name} {...island} index={idx} />
        ))}
      </div>
    </div>
  );
}
