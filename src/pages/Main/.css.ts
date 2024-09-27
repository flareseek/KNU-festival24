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

import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css.ts";

// 둥둥 떠다니는 애니메이션 정의
const floatAnimation = keyframes({
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-10px)" },
  "100%": { transform: "translateY(0)" },
});

// 기본 스타일 정의
export const mainPageStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  fontFamily: vars.font.pyeongChangBold,
  width: "100vw",
});

export const mainPageLogoStyle = style({
  width: "80vw",
  "@media": {
    "(min-width: 1000px)": {
      width: "50vw",
    },
    "(min-width: 1500px)": {
      width: "30vw",
    },
  },
});

export const mainPageMainTitleStyle = style({
  wordBreak: "keep-all",
  marginTop: "5vh",
  fontSize: "3.5rem",
  marginBottom: "1rem",
  lineHeight: 1.2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 1rem",
});

export const mainPageSubTitleStyle = style({
  fontSize: "1rem",
  // marginBottom: "1rem",
  fontFamily: vars.font.pyeongChangLight,
  fontWeight: "300",
});

export const mainPageQuickLinkContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  marginTop: "2rem",
  marginBottom: "1rem",
});

export const mainPageQuickLinkStyle = style({
  cursor: "pointer",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "white",
  textDecoration: "none",
  margin: "0.5rem",
});

export const mainPageLineUpgalleryViewStyle = style({
  marginTop: "1rem",
  width: "65vw",
  height: "auto",
  paddingBottom: "2rem",
  "@media": {
    "(min-width: 1000px)": {
      width: "50vw",
    },
    "(min-width: 1500px)": {
      width: "30vw",
    },
  },
});

export const mainPageMapViewStyle = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr", // 모바일에서 1열
  gap: "1rem",

  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr", // 태블릿 이상에서 2열
    },
    "screen and (min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr", // 추가적인 반응형 설정 가능
      width: "60vw",
    },
  },
});

// 공통 섬 스타일 정의
const createIslandStyle = (animationDelay: string) =>
  style({
    width: "80%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "1rem",
    marginBottom: "1rem",
    transition: "transform 0.3s ease",
    animation: `${floatAnimation} 4s ease-in-out infinite`,
    animationDelay,
    selectors: {
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  });

export const mainPageMainTitleRowStyle = style({
  display: "flex",
  justifyContent: "space-between",
  // paddingLeft: "1rem",
  width: "100%",
});

export const mainPageVideoStyle = style({
  width: "80vw",
  marginTop: "2rem",
  "@media": {
    "(min-width: 1000px)": {
      width: "50vw",
    },
    "(min-width: 1500px)": {
      width: "30vw",
    },
  },
});

export const mainPageIslandTitleStyle = style({
  writingMode: "vertical-rl",
  textOrientation: "upright",
  fontFamily: vars.font.pyeongChangLight,
  fontWeight: "300",
  fontSize: "1rem",
  display: "inline-block",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "0.5rem",
  padding: "1rem",
  color: "black",
  selectors: {
    "&.right": {
      marginLeft: "0.5rem",
      borderRadius: "1rem 0 0 1rem",
    },
    "&.left": {
      marginRight: "0.5rem",
      borderRadius: "0 1rem 1rem 0",
    },
  },
});

export const mainPageMapLogoStyle = style({
  animation: `${floatAnimation} 4s ease-in-out infinite`,
  animationDelay: "0.5s",
  width: "80vw",
  marginTop: "2rem",
  "@media": {
    "(min-width: 1000px)": {
      width: "50vw",
    },
    "(min-width: 1500px)": {
      width: "30vw",
    },
  },
});

export const mainPageMapStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  left: 0,
  right: 0,
});

export const mainPageArtistImageStyle = style({
  // aspectRatio: "16/9",
  maxWidth: "100%",
  maxHeight: "100%",
});

export const mainPageHeadLineStyle = style({
  width: "80vw",
  height: "1px",
  backgroundColor: "white",
  "@media": {
    "(min-width: 1000px)": {
      width: "50vw",
    },
    "(min-width: 1500px)": {
      width: "30vw",
    },
  },
});

export const mainPageArtistInfoStyle = style({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
  borderRadius: "20px",
  padding: "0.5rem",
  backgroundColor: "rgba(54,181,203,0.9)",
  fontFamily: vars.font.pretendardRegular,
  fontWeight: "lighter",
  fontSize: "1rem",
});

export const mainPageArtistMoreInfoIconStyle = style({
  width: "1rem",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "0.5rem",
});

// 각 섬에 특화된 스타일을 공통 함수로 정의
export const mainPageIslandStyle1 = createIslandStyle("0.5s");
export const mainPageIslandStyle2 = createIslandStyle("0.1s");
export const mainPageIslandStyle3 = createIslandStyle("1.5s");
export const mainPageIslandStyle4 = createIslandStyle("2.0s");
