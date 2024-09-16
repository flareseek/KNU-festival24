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
});

export const noticeNumber = style({
  fontSize: 25,
  fontWeight: 700,
  color: `${vars.color.blue2}`,
  marginLeft: 20,
});

export const noticeContentWrapper = style({
  width: "90%", // 부모 요소의 너비에 맞추기
  overflow: "hidden", // 넘치는 부분을 숨김
  position: "relative",
  marginLeft: 10,
});

export const noticeTitle = style({
  display: "inline-block",
  whiteSpace: "nowrap",
  fontSize: 16,
  fontWeight: 500,
  color: "black",
  margin: 5,
});

export const noticeDetail = style({
  whiteSpace: "pre-wrap",
  overflow: "hidden",
  backgroundColor: "rgba(255,255,255,0.6)", // 배경색
  padding: "10px",
  marginTop: -12,
  marginBottom: 5,
  width: "90%",
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
  marginLeft: "10px",
  padding: "3px 6px",
  backgroundColor: "#e74c3c",
  color: "#fff",
  borderRadius: "3px",
  fontSize: "12px",
  fontWeight: "bold",
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
