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
  margin:"0 0 20px 0",
});

export const artistPicContainer = style({
  width: "100%",
  backgroundColor: "gray",
  backgroundSize: "cover", // 배경 이미지를 화면 전체에 맞춤
  backgroundPosition: "center", // 이미지를 화면 중앙에 위치
  backgroundRepeat: "no-repeat", // 이미지를 반복하지 않도록 설정
});

export const artistDetailContainer = style({
  width: "100%",
  height: 450,
  overflowX: "hidden",
  overflowY: "scroll",
  marginTop: 15,
});
export const artistIntro = style({
  width: "100%",
  height: 150,
  marginBottom: 60,
});

export const artistIntroTitle = style({
  marginLeft: 15,
  marginBottom:10,
  fontSize: 20,
  color: "white",
  fontFamily: `${vars.font.pyeongChangBold}`,
});
export const artistIntroContent = style({
  margin: 20,
  fontSize: 15,
  fontWeight: 400,
  color: "white",
  fontFamily: `${vars.font.pretendardRegular}`,
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
});

export const albumCover = style({
  width: 70,
  height: 70,
  borderRadius: 10,
  backgroundColor: "gray",
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
});
export const albumTitle = style({
  fontFamily: `${vars.font.pretendardRegular}`,
  position: "absolute",
  left: 10,
  bottom: 15,
  margin: 0,
  color: "rgba(255,255,255,0.6)",
});
