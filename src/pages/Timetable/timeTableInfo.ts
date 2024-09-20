import _apink from "../../assets/artist/에이핑크.jpg";
import _choi_yu_ree from "../../assets/artist/최유리.jpg";
import _creespy from "../../assets/artist/크리스피.jpg";
import _glen_chenck from "../../assets/artist/글렌체크.jpg";
import _kwon_eun_bi from "../../assets/artist/권은비.jpg";
import _roy_kim from "../../assets/artist/로이킴.jpg";
import _gummy from "../../assets/artist/거미.jpg";
import { artistInfoListProps } from "../../shared/types/mainPage.ts";
import {
  ARTIST_APINK_URL,
  ARTIST_CHOI_YU_REE_URL,
  ARTIST_CREESPY_URL,
  ARTIST_GLEN_CENCK_URL,
  ARTIST_GUMMY_URL,
  ARTIST_KWON_EUNBI_URL,
  ARTIST_ROY_URL,
} from "../../shared/mainPageConst.ts";
import { timeTableInfoProps } from "../../shared/types/timeTable.ts";

const apink: artistInfoListProps = { name: "에이핑크", image: _apink, url: ARTIST_APINK_URL };
const roy_kim: artistInfoListProps = { name: "로이킴", image: _roy_kim, url: ARTIST_ROY_URL };
const glen_chenck: artistInfoListProps = {
  name: "글렌첸크",
  image: _glen_chenck,
  url: ARTIST_GLEN_CENCK_URL,
};
const creespy: artistInfoListProps = { name: "크리스피", image: _creespy, url: ARTIST_CREESPY_URL };
const kwon_eun_bi: artistInfoListProps = {
  name: "권은비",
  image: _kwon_eun_bi,
  url: ARTIST_KWON_EUNBI_URL,
};
const choi_yu_ree: artistInfoListProps = {
  name: "최유리",
  image: _choi_yu_ree,
  url: ARTIST_CHOI_YU_REE_URL,
};
const gummy: artistInfoListProps = { name: "거미", image: _gummy, url: ARTIST_GUMMY_URL };

export const timeTableInfo: timeTableInfoProps[] = [
  {
    title: "상시 프로그램 진행",
    description: "상시 프로그램 진행",
    descriptionShow: false,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 11:00"),
    endTime: new Date("2024-09-01 12:00"),
  },
  {
    title: "리허설",
    description: "리허설",
    descriptionShow: false,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 13:00"),
    endTime: new Date("2024-09-01 17:00"),
  },
  {
    title: "무대입장",
    description: "무대입장",
    descriptionShow: false,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 17:00"),
    endTime: new Date("2024-09-01 18:00"),
  },
  {
    title: "국민의례",
    description: "약식",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 18:00"),
    endTime: new Date("2024-09-01 18:02"),
  },
  {
    title: "개회사",
    description: "사회자",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 18:02"),
    endTime: new Date("2024-09-01 18:07"),
  },
  {
    title: "내빈 소개",
    description: "정재연 총장",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 18:07"),
    endTime: new Date("2024-09-01 18:15"),
  },
  {
    title: "축사",
    description: "귀빈",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 18:15"),
    endTime: new Date("2024-09-01 18:35"),
  },
  {
    title: "개회 선언",
    description: "신윤희 기획국장",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 18:35"),
    endTime: new Date("2024-09-01 18:40"),
  },
  {
    title: "행사 일정 소개",
    description: "사회자",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 18:40"),
    endTime: new Date("2024-09-01 18:50"),
  },
  {
    title: "백령 응원단 공연 및 행사 진행",
    description: "백령 응원단 공연(19:00~)",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 18:50"),
    endTime: new Date("2024-09-01 19:30"),
  },
  {
    title: "KNU-ARTIST",
    description: "댄스 3팀",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 19:30"),
    endTime: new Date("2024-09-01 21:00"),
  },
  {
    title: "초청 아티스트 공연",
    description: "로이킴, 에이핑크",
    descriptionShow: true,
    artist: [roy_kim, apink],
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 21:00"),
    endTime: new Date("2024-09-01 22:00"),
  },
  {
    title: "네버랜드, 필름 속으로 - 영화제",
    description: "알라딘(2019), 대운동장 특설 무대",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-01 22:00"),
    endTime: new Date("2024-09-01 24:00"),
  },
  // 2일차
  {
    title: "상시 프로그램 진행",
    description: "상시 프로그램 진행",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-02 11:00"),
    endTime: new Date("2024-09-02 18:00"),
  },
  {
    title: "리허설",
    description: "리허설",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-02 13:00"),
    endTime: new Date("2024-09-02 17:00"),
  },
  {
    title: "무대입장",
    description: "무대입장",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-02 17:00"),
    endTime: new Date("2024-09-02 18:00"),
  },
  {
    title: "KNU-ARTIST",
    description: "밴드 8팀",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-02 18:00"),
    endTime: new Date("2024-09-02 20:00"),
  },
  {
    title: "초청 아티스트 공연",
    description: "글렌첸크, 크리스피, 권은비",
    descriptionShow: true,
    artist: [glen_chenck, creespy, kwon_eun_bi],
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-02 20:00"),
    endTime: new Date("2024-09-02 22:00"),
  },
  {
    title: "재학생 밴드 공연 & DJ FESTA",
    description: "재학생 밴드 공연 & DJ FESTA",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-02 22:00"),
    endTime: new Date("2024-09-02 24:00"),
  },
  // 3일차
  {
    title: "상시 프로그램 진행",
    description: "상시 프로그램 진행",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 11:00"),
    endTime: new Date("2024-09-03 18:00"),
  },
  {
    title: "리허설",
    description: "리허설",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 13:00"),
    endTime: new Date("2024-09-03 17:00"),
  },
  {
    title: "무대입장",
    description: "무대입장",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 17:00"),
    endTime: new Date("2024-09-03 18:00"),
  },
  {
    title: "가요제",
    description: "8팀",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 18:00"),
    endTime: new Date("2024-09-03 20:00"),
  },
  {
    title: "총장님 본인등판",
    description: "총장님 본인등판",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 20:00"),
    endTime: new Date("2024-09-03 21:00"),
  },
  {
    title: "국민의례",
    description: "약식",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 21:00"),
    endTime: new Date("2024-09-03 21:02"),
  },
  {
    title: "내빈 소개",
    description: "사회자",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 21:02"),
    endTime: new Date("2024-09-03 21:05"),
  },
  {
    title: "시상식",
    description: "정재연 총장",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 21:05"),
    endTime: new Date("2024-09-03 21:25"),
  },
  {
    title: "폐회 선언",
    description: "총학생회장",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 21:25"),
    endTime: new Date("2024-09-03 21:30"),
  },
  {
    title: "초청 아티스트 공연",
    description: "최유리, 거미",
    descriptionShow: true,
    artist: [choi_yu_ree, gummy],
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-03 21:30"),
    endTime: new Date("2024-09-03 22:30"),
  },
];
