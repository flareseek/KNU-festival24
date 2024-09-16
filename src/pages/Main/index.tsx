import {
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
  mainPageStyle,
  mainPageSubTitleStyle,
} from "./.css.ts";
import MainPageLogo from "../../assets/main_page_logo.svg?react";
import MainPageMapLogo from "../../assets/main_page_map_logo.svg?react";
import ham_square_island from "../../assets/ham_square_island.png";
import memorial_island from "../../assets/memorial_island.png";
import mirea_square_island from "../../assets/mirea_square_island.png";
import stadium_island from "../../assets/stadium_island.png";
import { Link } from "react-router-dom";

const islandList = [
  {
    name: "함인섭 광장",
    image: ham_square_island,
    style: mainPageIslandStyle1,
  },
  {
    name: "60주년 기념관",
    image: memorial_island,
    style: mainPageIslandStyle2,
  },
  {
    name: "미래광장",
    image: mirea_square_island,
    style: mainPageIslandStyle3,
  },
  {
    name: "대운동장",
    image: stadium_island,
    style: mainPageIslandStyle4,
  },
];

export default function Main() {
  return (
    <div className={mainPageStyle}>
      <div>
        <div className={mainPageMainTitleStyle}>
          <h1>2024 강원대학교</h1>
          <div className={mainPageMainTitleRowStyle}>
            {"백령대동제".split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>
        </div>

        <div className={mainPageSubTitleStyle}>
          <h3>2024.9.23(월) ~ 9.26(목)</h3>
          <br />
          <p>강원대학교 춘천캠퍼스</p>
        </div>
      </div>

      <MainPageLogo className={mainPageLogoStyle} />

      <h3>라인업</h3>
      <div className={mainPageLineUpgalleryViewStyle}>{/* 여기에 라인업 아이템들 추가 가능 */}</div>

      <h3>축제 지도</h3>
      <MainPageMapLogo className={mainPageMapLogoStyle} />
      <div className={mainPageLineUpgalleryViewStyle}>
        {islandList
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((island, index) => {
            const content = [
              <img key="image" src={island.image} alt={island.name} className={island.style} />,
              <p key="name" className={mainPageIslandTitleStyle}>
                {island.name}
              </p>,
            ];

            return (
              <Link className={mainPageMapStyle} key={index} to={"/"}>
                {index % 2 !== 0 ? content : content.reverse()}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
