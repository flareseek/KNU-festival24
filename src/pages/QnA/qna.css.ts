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
  height: 455,
  overflowY: "scroll",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
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
  height: 60,
  backgroundColor: "white",
  borderRadius: 10,
  marginBottom: 7,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  position: "relative",
});

export const qnaNumber = style({
  fontSize: 25,
  fontWeight: 700,
  color: `${vars.color.blue1}`,
  marginLeft: 20,
});

export const qnaContentWrapper = style({
  width: "90%", // 부모 요소의 너비에 맞추기
  overflow: "hidden", // 넘치는 부분을 숨김
  position: "relative",
  marginLeft: 10,
});

export const qnaContent = style({
  display: "inline-block", // 텍스트가 한 줄로 스크롤되도록 설정
  whiteSpace: "nowrap", // 텍스트를 한 줄로 유지
  fontSize: 16,
  fontWeight: 500,
  color: "black",
  margin: 5,
});

export const qnaDetail = style({
  overflow: "hidden",
  maxHeight: "500px", // 최대 높이를 설정
  backgroundColor: "rgba(0,129,201,0.3)", // 배경색
  color: "white",
  borderRadius: "0 0 5px 5px",
  padding: "10px",
  marginTop: -12,
  marginBottom: 5,
  width: "90%",
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
