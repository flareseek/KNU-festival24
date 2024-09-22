import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css.ts";

export const section = style({
  padding: "20px",
  fontFamily: vars.font.pretendardRegular,
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 769px)": {
      maxWidth: "50vw",
    },
    "screen and (max-width: 768px)": {
      padding: "10px",
      maxWidth: "none",
    },
  },
});

const baseFilterButton = style({
  padding: "10px 15px",
  margin: "0 5px 10px 0",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  backgroundColor: "rgba(79, 205, 197, 0.5)",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "16px 26px",
      margin: "0 3px 8px 0",
    },
  },
});

export const filterButton = styleVariants({
  default: [
    baseFilterButton,
    {
      color: vars.color.white,
      ":hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },
  ],
  active: [
    baseFilterButton,
    {
      fontWeight: "bold",
      backgroundColor: "rgba(255, 255, 255, 0.3)", // 강조 네모 배경
      color: "transparent", // 텍스트 색상 투명
      backgroundImage: "linear-gradient(to top left,  #04D1C3,#009efd, #FFFFFF)", // 텍스트 그라데이션
      WebkitBackgroundClip: "text", // 텍스트에만 그라데이션 적용
      WebkitTextFillColor: "transparent", // 텍스트 색상 채우기 제거
      position: "relative", // 텍스트와 배경 분리
      "::before": {
        // 배경 유지
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.3)", // 강조 네모 배경
        borderRadius: "20px", // 배경의 모서리 둥글게
        zIndex: -1, // 배경이 텍스트 뒤로 가게
      },
      ":hover": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      },
    },
  ],
});

export const timeTableItem = style({
  backgroundColor: vars.color.white,
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "15px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "10px",
      marginBottom: "10px",
    },
  },
});

export const timeTableTitle = style({
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "10px",
  fontFamily: vars.font.pyeongChangBold,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.3rem",
      marginBottom: "8px",
    },
  },
});

export const timeTableDescription = style({
  fontSize: "0.9rem",
  color: "#6c757d",
  marginBottom: "20px",
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const timeTableTime = style({
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: vars.color.blue1,
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
});

export const artistInfoContainer = style({
  marginTop: "15px",
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: "10px",
    },
  },
});

export const artistInfoTitle = style({
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: "10px",
  fontFamily: vars.font.pyeongChangBold,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.9rem",
      marginBottom: "8px",
    },
  },
});

export const artistItem = style({
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  marginBottom: "10px",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "8px",
    },
  },
});

export const artistImage = style({
  width: "100px",
  height: "100px",
  marginRight: "10px",
  objectFit: "cover",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "150px",
      height: "150px",
    },
  },
});

export const artistName = style({
  fontSize: "2rem",
  fontFamily: vars.font.pyeongChangLight,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
});

export const currentIndicator = style({
  backgroundColor: vars.color.blue1,
  color: vars.color.white,
  padding: "2px 8px",
  borderRadius: "4px",
  display: "inline-block",
  marginTop: "8px",
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const timeSeparator = style({
  margin: "16px 0",
  border: "none",
  borderTop: "1px dashed #d9d9d9",
  "@media": {
    "screen and (max-width: 768px)": {
      margin: "12px 0",
    },
  },
});
