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

import _apink from "../../assets/artist/에이핑크.jpg";
import _choi_yu_ree from "../../assets/artist/최유리.jpg";
import _creespy from "../../assets/artist/크리스피.jpg";
import _glen_chenck from "../../assets/artist/글렌체크.jpg";
import _kwon_eun_bi from "../../assets/artist/권은비.jpg";
import _roy_kim from "../../assets/artist/로이킴.jpg";
import _gummy from "../../assets/artist/거미.jpg";
import _sixtyPub from "../../assets/data/booth_image/playground/bottom_pink_line/sixty_pub.jpg";
import _futurePub from "../../assets/data/booth_image/playground/bottom_pink_line/future_pub.jpg";
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

const apink: artistInfoListProps = {
  name: "에이핑크",
  image: _apink,
  url: `/artist/${ARTIST_APINK_URL}`,
};
const roy_kim: artistInfoListProps = {
  name: "로이킴",
  image: _roy_kim,
  url: `/artist/${ARTIST_ROY_URL}`,
};
const glen_chenck: artistInfoListProps = {
  name: "글렌체크",
  image: _glen_chenck,
  url: `/artist/${ARTIST_GLEN_CENCK_URL}`,
};
const creespy: artistInfoListProps = {
  name: "크리스피",
  image: _creespy,
  url: `/artist/${ARTIST_CREESPY_URL}`,
};
const kwon_eun_bi: artistInfoListProps = {
  name: "권은비",
  image: _kwon_eun_bi,
  url: `/artist/${ARTIST_KWON_EUNBI_URL}`,
};
const choi_yu_ree: artistInfoListProps = {
  name: "최유리",
  image: _choi_yu_ree,
  url: `/artist/${ARTIST_CHOI_YU_REE_URL}`,
};
const gummy: artistInfoListProps = {
  name: "거미",
  image: _gummy,
  url: `/artist/${ARTIST_GUMMY_URL}`,
};

const sixtyPubInfo: artistInfoListProps = {
  name: "60주년 기념관 주점",
  image: _sixtyPub,
  url: `/booth_foodtruck_list/booth/2`,
};

const futurePubInfo: artistInfoListProps = {
  name: "미래광장 주점",
  image: _futurePub,
  url: `/booth_foodtruck_list/booth/a`,
};

export const timeTableInfo: timeTableInfoProps[] = [
  {
    title: "상시 프로그램 진행",
    description: "상시 프로그램 진행",
    descriptionShow: false,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 11:00"),
    endTime: new Date("2024-09-23 18:00"),
  },
  {
    title: "리허설",
    description: "리허설",
    descriptionShow: false,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 13:00"),
    endTime: new Date("2024-09-23 17:00"),
  },
  {
    title: "무대입장",
    description: "무대입장",
    descriptionShow: false,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 17:00"),
    endTime: new Date("2024-09-23 18:00"),
  },
  {
    title: "국민의례",
    description: "약식",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:00"),
    endTime: new Date("2024-09-23 18:02"),
  },
  {
    title: "개회사",
    description: "사회자",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:02"),
    endTime: new Date("2024-09-23 18:07"),
  },
  {
    title: "내빈 소개",
    description: "정재연 총장",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:07"),
    endTime: new Date("2024-09-23 18:15"),
  },
  {
    title: "축사",
    description: "귀빈",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:15"),
    endTime: new Date("2024-09-23 18:35"),
  },
  {
    title: "개회 선언",
    description: "신윤희 기획국장",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:35"),
    endTime: new Date("2024-09-23 18:40"),
  },
  {
    title: "행사 일정 소개",
    description: "사회자",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:40"),
    endTime: new Date("2024-09-23 18:50"),
  },
  {
    title: "백령 응원단 공연 및 행사 진행",
    description: "백령 응원단 공연(19:00~)",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:50"),
    endTime: new Date("2024-09-23 19:20"),
  },
  {
    title: "초청 아티스트 공연",
    description: "로이킴, 에이핑크",
    descriptionShow: true,
    artist: [roy_kim, apink],
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 21:00"),
    endTime: new Date("2024-09-23 22:00"),
  },
  {
    title: "네버랜드, 필름 속으로 - 영화제",
    description: "알라딘(2019), 대운동장 특설 무대",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 22:00"),
    endTime: new Date("2024-09-23 24:00"),
  },
  // 2일차
  {
    title: "상시 프로그램 진행",
    description: "상시 프로그램 진행",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 11:00"),
    endTime: new Date("2024-09-24 18:00"),
  },
  {
    title: "리허설",
    description: "리허설",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 13:00"),
    endTime: new Date("2024-09-24 17:00"),
  },
  {
    title: "무대입장",
    description: "무대입장",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 17:00"),
    endTime: new Date("2024-09-24 18:00"),
  },
  {
    title: "초청 아티스트 공연",
    description: "글렌체크, 크리스피, 권은비",
    descriptionShow: true,
    artist: [glen_chenck, creespy, kwon_eun_bi],
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 20:00"),
    endTime: new Date("2024-09-24 22:00"),
  },
  {
    title: "재학생 밴드 공연 & DJ FESTA",
    description: "재학생 밴드 공연 & DJ FESTA",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 22:00"),
    endTime: new Date("2024-09-24 24:00"),
  },
  // 3일차
  {
    title: "상시 프로그램 진행",
    description: "상시 프로그램 진행",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 11:00"),
    endTime: new Date("2024-09-25 18:00"),
  },
  {
    title: "리허설",
    description: "리허설",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 13:00"),
    endTime: new Date("2024-09-25 17:00"),
  },
  {
    title: "무대입장",
    description: "무대입장",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 17:00"),
    endTime: new Date("2024-09-25 18:00"),
  },
  {
    title: "가요제",
    description: "8팀",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 18:00"),
    endTime: new Date("2024-09-25 20:00"),
  },
  {
    title: "총장님 본인등판",
    description: "총장님 본인등판",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 20:00"),
    endTime: new Date("2024-09-25 21:00"),
  },
  {
    title: "국민의례",
    description: "약식",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 21:00"),
    endTime: new Date("2024-09-25 21:02"),
  },
  {
    title: "내빈 소개",
    description: "사회자",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 21:02"),
    endTime: new Date("2024-09-25 21:05"),
  },
  {
    title: "시상식",
    description: "정재연 총장",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 21:05"),
    endTime: new Date("2024-09-25 21:25"),
  },
  {
    title: "폐회 선언",
    description: "총학생회장",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 21:25"),
    endTime: new Date("2024-09-25 21:30"),
  },
  {
    title: "초청 아티스트 공연",
    description: "최유리, 거미",
    descriptionShow: true,
    artist: [choi_yu_ree, gummy],
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 21:30"),
    endTime: new Date("2024-09-25 22:30"),
  },
  // knu-artist (9/22 패치)
  {
    title: "co'k 공연1",
    description: "KNU-ARTIST (댄스 3팀)",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 19:20"),
    endTime: new Date("2024-09-23 19:29"),
  },
  {
    title: "co'k 공연2",
    description: "KNU-ARTIST (댄스 3팀)",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 19:34"),
    endTime: new Date("2024-09-23 19:50"),
  },
  {
    title: "브로커 공연",
    description: "KNU-ARTIST (댄스 3팀)",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 19:55"),
    endTime: new Date("2024-09-23 20:08"),
  },
  {
    title: "전야 공연",
    description: "KNU-ARTIST (댄스 3팀)",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 20:13"),
    endTime: new Date("2024-09-23 20:31"),
  },
  {
    title: "헤모글로빈 공연",
    description: "KNU-ARTIST (밴드 8팀)",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 17:59"),
    endTime: new Date("2024-09-24 18:09"),
  },
  {
    title: "오소리 공연",
    description: "KNU-ARTIST (밴드 8팀)",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 18:13"),
    endTime: new Date("2024-09-24 18:31"),
  },
  {
    title: "한울림 공연",
    description: "KNU-ARTIST (밴드 8팀)",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 18:35"),
    endTime: new Date("2024-09-24 18:50"),
  },
  {
    title: "허밍 공연",
    description: "KNU-ARTIST (밴드 8팀)",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 18:54"),
    endTime: new Date("2024-09-24 19:04"),
  },
  {
    title: "부리또 공연",
    description: "KNU-ARTIST (밴드 8팀)",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 19:13"),
    endTime: new Date("2024-09-24 19:23"),
  },
  {
    title: "기타치노 공연",
    description: "KNU-ARTIST (밴드 8팀)",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 19:27"),
    endTime: new Date("2024-09-24 19:41"),
  },
  {
    title: "하루 공연",
    description: "KNU-ARTIST (밴드 8팀)",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 19:45"),
    endTime: new Date("2024-09-24 20:00"),
  },
  {
    title: "라스트댄스 공연",
    description: "KNU-ARTIST (밴드 8팀)",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 20:04"),
    endTime: new Date("2024-09-24 20:14"),
  },
  {
    title: "무대 입장(재학생)",
    description: "팔찌 착용 필요",
    descriptionShow: true,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 17:00"),
    endTime: new Date("2024-09-23 17:50"),
    link: {
      text: "(자세히보기)",
      url: "https://www.instagram.com/p/DAFpPQ_SQyL",
    },
  },
  {
    title: "무대 입장(전체)",
    description: "무대 입장(전체) 시간",
    descriptionShow: false,
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 17:50"),
    endTime: new Date("2024-09-23 24:00"),
  },
  {
    title: "무대 입장(재학생)",
    description: "팔찌 착용 필요",
    descriptionShow: true,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 17:00"),
    endTime: new Date("2024-09-24 17:50"),
    link: {
      text: "(자세히보기)",
      url: "https://www.instagram.com/p/DAFpPQ_SQyL",
    },
  },
  {
    title: "무대 입장(전체)",
    description: "무대 입장(전체) 시간",
    descriptionShow: false,
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 17:50"),
    endTime: new Date("2024-09-24 24:00"),
  },
  {
    title: "무대 입장(재학생)",
    description: "팔찌 착용 필요",
    descriptionShow: true,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 17:00"),
    endTime: new Date("2024-09-25 17:50"),
    link: {
      text: "(자세히보기)",
      url: "https://www.instagram.com/p/DAFpPQ_SQyL",
    },
  },
  {
    title: "무대 입장(전체)",
    description: "무대 입장(전체) 시간",
    descriptionShow: false,
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 17:50"),
    endTime: new Date("2024-09-25 24:00"),
  },
  {
    title: "미래광장 주점 운영",
    description: "",
    descriptionShow: false,
    artist: [futurePubInfo],
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:00"),
    endTime: new Date("2024-09-24 00:00"),
  },
  {
    title: "60주년기념관 주점 운영",
    description: "",
    descriptionShow: false,
    artist: [sixtyPubInfo],
    date: new Date("2024-09-23"),
    startTime: new Date("2024-09-23 18:00"),
    endTime: new Date("2024-09-24 01:00"),
  },
  {
    title: "미래광장 주점 운영",
    description: "",
    descriptionShow: false,
    artist: [futurePubInfo],
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 18:00"),
    endTime: new Date("2024-09-25 00:00"),
  },
  {
    title: "60주년기념관 주점 운영",
    description: "",
    descriptionShow: false,
    artist: [sixtyPubInfo],
    date: new Date("2024-09-24"),
    startTime: new Date("2024-09-24 18:00"),
    endTime: new Date("2024-09-25 01:00"),
  },
  {
    title: "미래광장 주점 운영",
    description: "",
    descriptionShow: false,
    artist: [futurePubInfo],
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 18:00"),
    endTime: new Date("2024-09-26 00:00"),
  },
  {
    title: "60주년기념관 주점 운영",
    description: "",
    descriptionShow: false,
    artist: [sixtyPubInfo],
    date: new Date("2024-09-25"),
    startTime: new Date("2024-09-25 18:00"),
    endTime: new Date("2024-09-26 01:00"),
  },
  {
    title: "미래광장 주점 운영",
    description: "",
    descriptionShow: false,
    artist: [futurePubInfo],
    date: new Date("2024-09-26"),
    startTime: new Date("2024-09-26 18:00"),
    endTime: new Date("2024-09-27 00:00"),
  },
  {
    title: "60주년기념관 주점 운영",
    description: "",
    descriptionShow: false,
    artist: [sixtyPubInfo],
    date: new Date("2024-09-26"),
    startTime: new Date("2024-09-26 18:00"),
    endTime: new Date("2024-09-27 01:00"),
  },
];
