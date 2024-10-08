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

// 검색 필드를 감싸는 컨테이너
export const searchContainer = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "50px",
  boxShadow: "0 5px 5px rgba(0,0,0,0.25)",
  width: "80%",
  height: "40px",
  position: "absolute",
  top: 10,
  marginBottom: 20,
  "@media": {
    "(max-width: 375px)": {
      //Iphone SE 같은 소형기기
      height: "35px",
    },
    "(min-width: 1000px)": {
      width: "60%",
    },
    "(min-height: 1000px)": {
      height: "50px",
    },
  },
});

// 검색 입력 필드 스타일
export const searchbar = style({
  width: "100%", // 너비 조정
  height: "100%",
  border: "none",
  outline: "none",
  borderRadius: 50, // 왼쪽만 둥글게
  padding: "0px 15px",
  fontSize: "18px",
  fontWeight: 500,
  "@media": {
    "(max-width: 375px)": {
      //Iphone SE 같은 소형폰
      fontSize: "15px",
    },
    "(min-height: 1000px)": {
      fontSize: "20px",
    },
  },
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

export const noticeList = style({
  width: "100%",
  height: 455,
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

export const noticeContainer = style({
  width: "95%",
  height: "auto",
  borderBottom: "1px solid white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: 7,
});

export const notice = style({
  width: "95%",
  height: 60,
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
      height: "50px",
    },
  },
});

export const noticeNumber = style({
  fontSize: 25,
  fontWeight: 700,
  color: `${vars.color.blue1}`,
  marginLeft: 20,
});

export const noticeContentWrapper = style({
  width: "80%", // 부모 요소의 너비에 맞추기
  overflow: "hidden", // 넘치는 부분을 숨김
  position: "relative",
  marginLeft: 10,
});

export const noticeTitle = style({
  display: "inline-block",
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

export const noticeDetail = style({
  display: "flex",
  flexDirection: "column",
  whiteSpace: "pre-wrap",
  overflow: "hidden",
  backgroundColor: "rgba(255,255,255,0.6)", // 배경색
  padding: "10px",
  borderRadius: "0 0 5px 5px",
  marginTop: -12,
  marginBottom: 5,
  lineHeight: 1.3,
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

//검색한 키워드가 없을 경우 뜨는 글귀
export const emptyListAlert = style({
  color: "white",
  fontSize: 18,
  fontWeight: 700,
  textAlign: "center",
});

//새 게시물에 뜨는 new 태그
export const newBadge = style({
  width: 25,
  marginLeft: "10px",
  padding: "3px 6px",
  backgroundColor: "#e74c3c",
  color: "#fff",
  borderRadius: "3px",
  fontSize: "14px",
  fontWeight: 500,
});

export const arrowButton = style({
  width: "30px",
  height: "30px",
  position: "absolute",
  color: "#0081e4",
  right: "10px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
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
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
});
