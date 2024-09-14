import { style, globalStyle, globalFontFace } from "@vanilla-extract/css";

// body에 글로벌 스타일 적용
globalStyle("body", {
  position: "relative",
  margin: 0,
  padding: 0,
  backgroundImage: 'url("/src/assets/background.svg")', // 배경 이미지 경로
  backgroundSize: "cover", // 배경 이미지를 화면 전체에 맞춤
  backgroundPosition: "center", // 이미지를 화면 중앙에 위치
  backgroundRepeat: "no-repeat", // 이미지를 반복하지 않도록 설정
  width: "100%",
  height: "100vh", // 전체 화면 높이 적용
  overflow: "hidden", // 스크롤바가 나타나지 않도록 설정
  fontFamily: `'Pretendard', sans-serif`,
});
globalStyle("#root", {
    height:"100%"
  });
  globalStyle("#root>div", {
    height:"100%"
  });
  globalStyle("#root>div>div", {
    height:"100%"
  });
globalStyle("::-webkit-scrollbar", {
  width: "0px",
  height: "0px",
});

globalFontFace("PyeongChangPeace", {
  src: 'url("/src/assets/PyeongChangPeace-Bold.otf") format("opentype")',
  fontWeight: "bold",
  fontStyle: "normal",
});


export const titleText = style({
  fontSize: 25,
  fontWeight: 500,
  color: "white",
  marginTop: 50,
});

// 상단의 빨간 컨테이너
export const container = style({
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "center",
});

// 중간에 검색창을 배치하는 컨테이너
export const mid = style({
  position: "relative",
  width: "100%",
  height:"90%",
  display: "flex",
  margin: "20px 0",
  alignItems: "center",
  flexDirection: "column",
});

export const artistPicContainer = style({
  width: "100%",
  height:'50%',
  backgroundImage: 'url("/src/assets/day6.svg")',
  backgroundSize: "cover", // 배경 이미지를 화면 전체에 맞춤
  backgroundPosition: "center", // 이미지를 화면 중앙에 위치
  backgroundRepeat: "no-repeat", // 이미지를 반복하지 않도록 설정
});

export const artistIntro = style({
  width: "100%",
  height: 150,
  marginBottom: 60,
});

export const artistIntroTitle = style({
  marginLeft: 15,
  fontSize: 20,
  color: "white",
  fontFamily: "PyeongChangPeace",
});
export const artistIntroContent = style({
  margin: 20,
  fontSize: 15,
  fontWeight: 400,
  color: "white",
  fontFamily: "pretendard",
});
export const artistSongsContainer = style({
  width: "100%",
  height: 300,
  overflowY:"scroll",
});

export const artistSongsList = style({
    width: "100%",
    height: 320,
    
  });

export const artistSong = style({
    width: "100%",
    height: 80,
    display:'flex',
    alignItems:'center',
    padding:"5px 10px"
  });


export const albumCover=style({
  width:70,
  height:70,
  borderRadius:10,
  backgroundColor:'gray',
})

export const albumContainer=style({
  width:"75%",
  height:70,
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  padding:2,
  position:'relative',
})
export const songTitle=style({
  position:'absolute',
  fontWeight:500,
  margin:0,
  left:10,
  top:10,
  fontSize:20,
  color:"white",
})
export const albumTitle=style({
  position:'absolute',
  left:10,
  bottom:15,
  margin:0,
  color:"rgba(255,255,255,0.6)",
})
