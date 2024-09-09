import { style, globalStyle, keyframes } from "@vanilla-extract/css";

// body에 글로벌 스타일 적용
globalStyle("body", {
  margin: 0,
  padding: 0,
  backgroundImage: 'url("src/assets/background.svg")', // 배경 이미지 경로
  backgroundSize: "cover", // 배경 이미지를 화면 전체에 맞춤
  backgroundPosition: "center", // 이미지를 화면 중앙에 위치
  backgroundRepeat: "no-repeat", // 이미지를 반복하지 않도록 설정
  width: "100%",
  height: "100vh", // 전체 화면 높이 적용
  overflow: "hidden", // 스크롤바가 나타나지 않도록 설정
  fontFamily: `'Pretendard', sans-serif`,
});

globalStyle("::-webkit-scrollbar", {
  width: "0px",
  height: "0px",
});

// 검색 필드와 버튼을 감싸는 컨테이너
export const searchContainer = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "50px",
  boxShadow: "0 5px 5px rgba(0,0,0,0.25)",
  width: "80%",
  height: "40px",
  position: "relative",
  marginBottom: 20,
});

// 검색 입력 필드 스타일
export const searchbar = style({
  width: "85%", // 너비 조정
  height: "100%",
  border: "none",
  outline: "none",
  borderRadius: "50px 0 0 50px", // 왼쪽만 둥글게
  paddingLeft: "15px",
  fontFamily: `'Pretendard', sans-serif`,
  fontSize: "18px",
  fontWeight: 500,
});

// 검색 버튼 스타일
export const searchButton = style({
  width: "70px", // 버튼의 너비
  height: 42,
  backgroundColor: "#3498db", // 파란색 배경
  border: "none",
  borderRadius: 20,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "20px",
  padding: "0",
  boxShadow: "0 5px 5px rgba(0,0,0,0.25)",
  position: "absolute",
  right: 0,
});

// 상단의 빨간 컨테이너
export const container = style({
  width: "100%",
  height: 110,
  display: "flex",
  justifyContent: "center",
});

// 중간에 검색창을 배치하는 컨테이너
export const mid = style({
  width: "100%",
  height: 712,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const noticeList = style({
  width: "100%",
  height: "70%",
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

export const copyright = style({
  margin: 0,
  padding: 0,
  backgroundImage: 'url("src/assets/copyright.svg")', // 배경 이미지 경로
  backgroundPosition: "center", // 이미지를 화면 중앙에 위치
  backgroundRepeat: "no-repeat", // 이미지를 반복하지 않도록 설정
  width: "80%",
  height: "100%", // 전체 화면 높이 적용
  overflow: "hidden", // 스크롤바가 나타나지 않도록 설정
});

export const noticeNumber = style({
  fontSize: 25,
  fontWeight: 700,
  color: "#0081C9",
  marginLeft: 20,
});
// 텍스트를 스크롤시키는 애니메이션
const scrollAnimation = keyframes({
  "0%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(-100%)" },
});

export const noticeContentWrapper = style({
  width: "70%", // 부모 요소의 너비에 맞추기
  overflow: "hidden", // 넘치는 부분을 숨김
  position: "relative",
  marginLeft: 10,
});

export const noticeContent = style({
  display: "inline-block", // 텍스트가 한 줄로 스크롤되도록 설정
  whiteSpace: "nowrap", // 텍스트를 한 줄로 유지
  animation: `${scrollAnimation} 8s linear infinite`, // 10초 동안 좌우로 스크롤
  fontSize: 18,
  fontWeight: 500,
  color: "black",
  margin: 10,
});
export const noticeDownBtn = style({
  backgroundImage: 'url("src/assets/downbtn.svg")', // 배경 이미지 경로
  backgroundSize: "cover", // 배경 이미지를 화면 전체에 맞춤
  backgroundPosition: "center", // 이미지를 화면 중앙에 위치
  backgroundRepeat: "no-repeat", // 이미지를 반복하지 않도록 설정
  backgroundColor: "white",
  width: 30,
  height: 30,
  position: "absolute",
  right: 10,
  border: "none",
});

// 공지사항 상세 내용 (애니메이션 효과 포함)
export const noticeDetail = style({
  overflow: "hidden",
  transition: "max-height 0.5s ease-in-out", // 부드러운 애니메이션 효과
  maxHeight: "500px", // 최대 높이를 설정
  backgroundColor: "rgba(255,255,255,0.6)", // 배경색
  padding: "10px",
  marginTop: -12,
  marginBottom: 5,
  width: "90%",
});
