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

import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css";

// 중간에 검색창을 배치하는 컨테이너
export const mid = style({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  margin: "0 0 20px 0",
});

export const artistPicContainer = style({
  width: "100%",
  backgroundColor: "gray",
  backgroundSize: "cover", // 배경 이미지를 화면 전체에 맞춤
  backgroundPosition: "center", // 이미지를 화면 중앙에 위치
  backgroundRepeat: "no-repeat", // 이미지를 반복하지 않도록 설정
  "@media": {
    "(min-width: 1000px)": {
      borderRadius: 10,
      width: "60%",
    },
    "(min-height: 1000px)": {
      width: "60%",
    },
  },
});

export const artistDetailContainer = style({
  width: "100%",
  height: 450,
  overflowX: "hidden",
  overflowY: "scroll",
  marginTop: 15,
  "@media": {
    "(min-width: 1000px)": {
      height: 900,
    },
  },
});
export const artistIntro = style({
  width: "100%",
  height: 150,
  marginBottom: 60,
  "@media": {
    "(min-width: 1000px)": {
      height: 200,
      marginBottom: 80,
    },
  },
});

export const artistIntroTitle = style({
  marginLeft: 15,
  marginBottom: 10,
  fontSize: 20,
  color: "white",
  fontFamily: `${vars.font.pyeongChangBold}`,
  "@media": {
    "(min-width: 1000px)": {
      fontSize: 40,
      marginLeft: 25,
      marginBottom: 20,
    },
  },
});
export const artistIntroContent = style({
  margin: 20,
  fontSize: 15,
  fontWeight: 400,
  color: "white",
  fontFamily: `${vars.font.pretendardRegular}`,
  "@media": {
    "(min-width: 1000px)": {
      fontSize: 30,
    },
  },
});
export const artistSongsContainer = style({
  width: "100%",
  height: "100%",
});

export const artistSongsList = style({
  width: "100%",
  height: 320,
});

export const artistSong = style({
  width: "100%",
  height: 80,
  display: "flex",
  alignItems: "center",
  padding: "2px 10px",
  "@media": {
    "(min-width: 1000px)": {
      height: 140,
      padding: "2px 20px",
    },
  },
});

export const albumCover = style({
  width: 70,
  height: 70,
  borderRadius: 10,
  backgroundColor: "gray",
  "@media": {
    "(min-width: 1000px)": {
      width: 100,
      height: 100,
    },
  },
});

export const albumContainer = style({
  width: "75%",
  height: 70,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: 2,
  position: "relative",
});
export const songTitle = style({
  fontFamily: `${vars.font.pretendardRegular}`,
  position: "absolute",
  fontWeight: 500,
  margin: 0,
  left: 10,
  top: 10,
  fontSize: 20,
  color: "white",
  "@media": {
    "(min-width: 1000px)": {
      top: 0,
      fontSize: 35,
    },
  },
});
export const albumTitle = style({
  fontFamily: `${vars.font.pretendardRegular}`,
  position: "absolute",
  left: 10,
  bottom: 15,
  margin: 0,
  color: "rgba(255,255,255,0.6)",
  "@media": {
    "(min-width: 1000px)": {
      fontSize: 30,
      bottom: 0,
    },
  },
});
