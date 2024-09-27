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

export const subTitleContainer = style({
  marginBottom: 20,
  position: "absolute",
  top: 10,
});
// Subtitle text with custom font applied
export const subTitleText = style({
  fontSize: 30,
  fontWeight: 600,
  color: "white",
  marginTop: 0,
  paddingBottom: 0,
  fontFamily: vars.font.pyeongChangBold,
});

// 중간에 검색창을 배치하는 컨테이너
export const mid = style({
  position: "relative",
  width: "100%",
  height: 650,
  display: "flex",
  margin: "20px 0",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const qnaList = style({
  width: "100%",
  height: 480,
  overflowY: "scroll",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  "@media": {
    "(min-width: 1000px)": {
      width: "70%",
    },
  },
});

export const qnaContainer = style({
  width: "95%",
  height: "auto",
  borderBottom: "1px solid white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: 7,
});

export const qna = style({
  width: "95%",
  height: 65,
  backgroundColor: "white",
  borderRadius: 10,
  marginBottom: 7,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  position: "relative",
  cursor: "pointer",
  "@media": {
    "(max-width: 375px)": {
      //Iphone SE 같은 소형폰
      height: "55px",
    },
  },
});

export const qnaNumber = style({
  fontSize: 25,
  fontWeight: 700,
  color: `${vars.color.blue1}`,
  marginLeft: 20,
});

export const qnaContentWrapper = style({
  width: "80%", // 부모 요소의 너비에 맞추기
  overflow: "hidden", // 넘치는 부분을 숨김
  position: "relative",
  marginLeft: 10,
});

export const qnaContent = style({
  display: "inline-block", // 텍스트가 한 줄로 스크롤되도록 설정
  whiteSpace: "pre-line",
  fontSize: 16,
  fontWeight: 500,
  color: "black",
  margin: 5,
  "@media": {
    "(min-height: 1000px)": {
      fontSize: "23px",
    },
  },
});

export const qnaDetail = style({
  overflow: "hidden",
  maxHeight: "500px", // 최대 높이를 설정
  backgroundColor: "rgba(0,129,201,0.3)", // 배경색
  color: "white",
  borderRadius: "0 0 5px 5px",
  padding: "10px",
  marginTop: -10,
  marginBottom: 5,
  lineHeight: 1.5,
  width: "90%",
  "@media": {
    "(max-width: 375px)": {
      //Iphone SE 같은 소형폰
      width: "88%",
    },
    "(min-height: 1000px)": {
      fontSize: "25px",
    },
  },
});

export const pageButton = style({
  margin: "5px",
  marginTop: "15px",
  padding: "5px 10px",
  backgroundColor: "#ddd",
  color: "#000",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
});

export const activePageButton = style({
  margin: "5px",
  marginTop: "15px",
  padding: "5px 10px",
  backgroundColor: "#3498db", // 활성화된 페이지 배경색
  color: "#fff", // 활성화된 페이지 글자색
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
});

export const arrowButton = style({
  position: "absolute",
  right: "10px",
  fontSize: "30px",
  color: "#0081e4",
  border: "none",
  background: "none", // 배경 없애기
  cursor: "pointer", // 커서 설정
});
