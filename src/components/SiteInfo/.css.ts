import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2rem",
  backgroundColor: "rgba(255,255,255,0.32)",
  color: "#0781CD",
  fontFamily: "pretendard, sans-serif",
  boxShadow: "0 4px 6px rgba(7, 129, 205, 0.1)",
  borderRadius: "8px",
});

export const heading = style({
  fontSize: "2.5rem",
  color: "#029FD7",
  marginBottom: "1.5rem",
  fontFamily: "pyeongChangBold, sans-serif",
  textAlign: "center",
  position: "relative",
  ":after": {
    content: '""',
    display: "block",
    width: "50px",
    height: "3px",
    backgroundColor: "#04D1C3",
    margin: "0.5rem auto",
  },
});

export const section = style({
  marginBottom: "2rem",
  background: "#F0F8FF", // Light blue background
  padding: "1.5rem",
  borderRadius: "6px",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "translateY(-5px)",
  },
});

export const subHeading = style({
  fontSize: "1.8rem",
  color: "#0781CD",
  marginBottom: "1rem",
  fontFamily: "pyeongChangLight, sans-serif",
  borderBottom: "2px solid #04D1C3",
  paddingBottom: "0.5rem",
});

export const list = style({
  listStyleType: "none",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
});

export const listItem = style({
  backgroundColor: "#FFFFFF",
  padding: "1rem",
  borderRadius: "6px",
  boxShadow: "0 2px 4px rgba(7, 129, 205, 0.1)",
  transition: "box-shadow 0.3s ease",
  ":hover": {
    boxShadow: "0 4px 8px rgba(7, 129, 205, 0.15)",
  },
});

export const personName = style({
  fontWeight: "bold",
  color: "#029FD7",
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
});

export const contactInfo = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  fontSize: "0.875rem",
  marginBottom: "0.5rem",
  a: {
    color: "transparent", // 글자색을 투명하게 설정
    backgroundImage: "linear-gradient(90deg, #0781CD, #00CFFD, #029FD7, #00274D)", // 더 극적인 그라데이션 색상 추가
    backgroundClip: "text", // 배경을 텍스트에만 적용
    WebkitBackgroundClip: "text", // 웹킷 브라우저 지원
    textDecoration: "none",
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#029FD7", // 호버 시 배경색
    },
  },
});

export const responsibilities = style({
  marginTop: "0.75rem",
  paddingLeft: "1rem",
  color: "#0781CD",
  fontSize: "0.9rem",
  li: {
    marginBottom: "0.25rem",
    position: "relative",
    ":before": {
      content: '"•"',
      position: "absolute",
      left: "-1rem",
      color: "#04D1C3",
    },
  },
});
