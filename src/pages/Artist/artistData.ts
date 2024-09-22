import apink from "/src/assets/artist/apink.png";
import roykim from "/src/assets/artist/roykim.png";
import glencheck from "/src/assets/artist/glencheck.png";
import creespy from "/src/assets/artist/creespy.png";
import kwoneunbi from "/src/assets/artist/kwoneunbi.png";
import choiyuree from "/src/assets/artist/choiyuree.png";
import gummy from "/src/assets/artist/gummy.png";
import apink_onesix from "/src/assets/artist/album/apink_one&six.jpeg";
import apink_pinkblossom from "/src/assets/artist/album/apink_pinkblossom.jpeg";
import apink_pinkluv from "/src/assets/artist/album/apink_pinkluv.jpeg";
import apink_secretgarden from "/src/assets/artist/album/apink_secretgarden.jpeg";
import choiyuree_그댄행복에살텐데 from "/src/assets/artist/album/choiyuree_그댄행복에살텐데.jpeg";
import choiyuree_밤바다 from "/src/assets/artist/album/choiyuree_밤바다.jpeg";
import choiyuree_유영 from "/src/assets/artist/album/choiyuree_유영.jpeg";
import choiyuree_잘지내자우리 from "/src/assets/artist/album/choiyuree_잘지내자우리.jpeg";
import creespy_bruiseboy from "/src/assets/artist/album/creespy_bruiseboy.jpeg";
import creespy_daydreaming from "/src/assets/artist/album/creespy_daydreaming.jpeg";
import creespy_ella from "/src/assets/artist/album/creespy_ella.jpeg";
import glencheck_bleach from "/src/assets/artist/album/glencheck_bleach.jpeg";
import glencheck_hautecouture from "/src/assets/artist/album/glencheck_hautecouture.jpeg";
import kwoneinbi_sabotage from "/src/assets/artist/album/kwoneinbi_sabotage.jpeg";
import kwoneunbi_여름아부탁해 from "/src/assets/artist/album/kwoneunbi_여름아부탁해.jpeg";
import kwoneunbi_lethality from "/src/assets/artist/album/kwoneunbi_lethality.jpeg";
import kwoneunbi_theflash from "/src/assets/artist/album/kwoneunbi_theflash.jpeg";
import roy_그때헤어지면돼 from "/src/assets/artist/album/roy_그때헤어지면돼.jpeg";
import roy_봄봄봄 from "/src/assets/artist/album/roy_봄봄봄.jpeg";
import roy_봄이와도 from "/src/assets/artist/album/roy_봄이와도.jpeg";
import roy_잘지내자우리 from "/src/assets/artist/album/roy_잘지내자우리.jpeg";
import gummy_기억해줘요내모든날과그때를 from "/src/assets/artist/album/gummy_기억해줘요내모든날과그때를.jpeg";
import gummy_itsdifferent from "/src/assets/artist/album/gummy_itsdifferent.jpeg";
import gummy_likethem from "/src/assets/artist/album/gummy_likethem.jpeg";
import gummy_youaremyeverythig from "/src/assets/artist/album/gummy_youaremyeverythig.jpeg";

// 각 아티스트의 개별 정보 타입
interface ArtistInfo {
  picture: string; // 이미지 경로
  description: string; // 아티스트 설명
  firstSong: string[]; // 첫 번째 곡, 앨범, 유튜브 링크, 앨범 커버
  secondSong: string[]; // 두 번째 곡, 앨범, 유튜브 링크, 앨범 커버
  thirdSong: string[]; // 세 번째 곡, 앨범, 유튜브 링크, 앨범 커버
  fourthSong: string[]; // 네 번째 곡, 앨범, 유튜브 링크, 앨범 커버
}

// 아티스트 데이터 타입: 각 아티스트의 이름이 키이고, 그 값은 ArtistInfo 객체
interface ArtistData {
  [key: string]: ArtistInfo; // 키는 아티스트 이름, 값은 ArtistInfo
}

export const artistData: ArtistData = {
  apink: {
    picture: apink,
    description:
      "Apink (에이핑크)는 박초롱, 윤보미, 정은지, 김남주, 오하영으로 구성된 대한민국의 5인조 걸그룹이다. 2011년 타이틀곡 '몰라요'를 내세운 첫 EP [Seven Springs of Apink]로 가요계 데뷔를 이뤘고, 소녀의 앳되고 풋풋한 사랑스러운 이미지로 관심을 모았다. 이어 발표한 두 번째 미니앨범의 타이틀곡 'My My'로 음악 방송 첫 1위에 올랐으며 각종 신인상을 차지하기도 했다. 2013년 신사동호랭이가 작사, 작곡을 맡은'<NoNoNo'를 발표, 90년대 걸그룹을 연상시키는 익숙한 멜로디로 대중의 귀를 사로잡았다.",
    firstSong: [
      "1도 없어",
      "ONE & SIX",
      "https://www.youtube.com/watch?v=F4oHuML9U2A",
      apink_onesix,
    ],
    secondSong: [
      "NoNoNo",
      "Secret Garden",
      "https://www.youtube.com/watch?v=hspqQuuuGIw",
      apink_secretgarden,
    ],
    thirdSong: [
      "Mr.Chu",
      "Pink Blossom",
      "https://www.youtube.com/watch?v=K5H-GvnNz2Y",
      apink_pinkblossom,
    ],
    fourthSong: ["LUV", "Pink LUV", "https://www.youtube.com/watch?v=8dVjSvLzD1I", apink_pinkluv],
  },
  roykim: {
    picture: roykim,
    description:
      "로이 킴(본명: 김상우)은 슈퍼스타K4의 우승자, 싱어송라이터이다. 슈퍼스타K4 의 우승자에서 잇단 발표곡들의 히트로 인기가수 대열에 올라온 로이킴＂어렸을 때 이문세, 김광석, 김현식, 안치환 같은 선배 분들의 노래를 들었어요. 어머니가 좋아하셨거든요. 아무래도 디지털화된 음악들은 제 적성에 맞지 않더라고요. 포크 음악을 좋아하기도 더 좋아했고 듣기도 더 많이 들었구요. 환경적인 영향도 있었고 제 취향에도 어울렸죠.＂",
    firstSong: ["봄봄봄", "봄봄봄", "https://www.youtube.com/watch?v=k3-BDy55tq4", roy_봄봄봄],
    secondSong: [
      "그때 헤어지면 돼",
      "그때 헤어지면 돼",
      "https://www.youtube.com/watch?v=SkN_hWI6n28",
      roy_그때헤어지면돼,
    ],
    thirdSong: [
      "봄이 와도",
      "봄이 와도",
      "https://www.youtube.com/watch?v=moVgOwYOXec",
      roy_봄이와도,
    ],
    fourthSong: [
      "잘 지내자, 우리",
      "잘 지내자, 우리(여름날 우리 X 로이킴)",
      "https://www.youtube.com/watch?v=6CkYrki1aFs",
      roy_잘지내자우리,
    ],
  },
  glencheck: {
    picture: glencheck,
    description:
      "글렌체크(Glen Check)는 대한민국의 신스팝, 일렉트로니카 밴드이다. 2011년, Disco Elevator라는 EP 앨범으로 데뷔했다. 2013년 제 10회와 2014년 제 11회를 연달아서 한국대중음악상 최우수 댄스일렉트로닉음반상을 2년 연속 수상했다.",
    firstSong: [
      "60’s Cardin",
      "Haute Couture",
      "https://www.youtube.com/watch?v=0fN71Wtgoa8",
      glencheck_hautecouture,
    ],
    secondSong: [
      "Dazed & Confused",
      "Bleach",
      "https://www.youtube.com/watch?v=-JviOqV3Kgc",
      glencheck_bleach,
    ],
    thirdSong: [
      "VIVID",
      "Haute Couture",
      "https://www.youtube.com/watch?v=fGC7I4-y2lg",
      glencheck_hautecouture,
    ],
    fourthSong: ["Sins", "Bleach", "https://www.youtube.com/watch?v=6pFG-VYxr9Q", glencheck_bleach],
  },
  creespy: {
    picture: creespy,
    description:
      "김승윤, 허민석, 신승호, 오장호, 하동준의 5인조 밴드 creespy는 풋풋하면서 싱그러운 하이틴 감성을 음악에 담아 들려주는 밴드이다. 흥겨운 밴드 사운드에 더해진 소년 감성의 목소리는 듣는이의 기분을 절로 신나게 하는 매력이 있다. 21년 데뷔하여 4장의 싱글과 1장의 EP를 발매하고 온/오프라인을 가리지 않고 전방위에서 활동을 이어가고 있다.",
    firstSong: [
      "You’re Just My Type",
      "Bruiseboy",
      "https://www.youtube.com/watch?v=9FoALFoanow",
      creespy_bruiseboy,
    ],
    secondSong: [
      "Bruiseboy",
      "Bruiseboy",
      "https://www.youtube.com/watch?v=U_2Wzr8Qh_0",
      creespy_bruiseboy,
    ],
    thirdSong: [
      "daydreaming",
      "daydreaming",
      "https://www.youtube.com/watch?v=w6PsU54KL1U",
      creespy_daydreaming,
    ],
    fourthSong: ["Ella", "Ella", "https://www.youtube.com/watch?v=9hPi2tqL_ik", creespy_ella],
  },
  kwoneunbi: {
    picture: kwoneunbi,
    description:
      "권은비는 한국의 가수이자 배우로, 걸그룹 아이즈원의 전 멤버다. 1995년생인 그녀는 2018년 Mnet 서바이벌 프로그램 'PRODUCE 48'을 통해 아이즈원의 리더로 데뷔했으며, 그룹이 2021년 해체된 후 솔로 가수로 전향했다. 2021년 8월 첫 솔로 앨범 'OPEN'을 발매하고 성공적인 솔로 활동을 시작했으며, 뛰어난 보컬과 퍼포먼스로 주목받고 있다. 권은비는 음악뿐만 아니라 연기와 예능 등 다양한 분야에서도 활약하고 있다.",
    firstSong: [
      "Underwater",
      "Lethality",
      "https://www.youtube.com/watch?v=ny1YiHlX_iE",
      kwoneunbi_lethality,
    ],
    secondSong: [
      "여름아 부탁해",
      "여름아 부탁해",
      "https://www.youtube.com/watch?v=Wdpn_mL_l2I",
      kwoneunbi_여름아부탁해,
    ],
    thirdSong: [
      "SABOTAGE",
      "SABOTAGE",
      "https://www.youtube.com/watch?v=YguHH5AM4gM",
      kwoneinbi_sabotage,
    ],
    fourthSong: [
      "The Flash",
      "The Flash",
      "https://www.youtube.com/watch?v=4dwpcSRX-1s",
      kwoneunbi_theflash,
    ],
  },
  choiyuree: {
    picture: choiyuree,
    description:
      "2020년 EP 앨범 <동그라미>로 데뷔한 1998년생 싱어송라이터 최유리. 그녀는 실력파 뮤지션들의 등용문이기도 한 ‘유재하음악경연대회’에서 스무살의 나이로 대상을 수상했다. 그동안 쉬지 않고 노래할 수 있었던 건 유독 감정 표현에 취약한 자신이 세상과 소통하는 수단이 바로 음악이었기 때문이다. 삶의 순간들을 바라보는 싱어송라이터 최유리의 사려 깊은 시선이 전하는 공감과 위로를 곡에서 고스란히 느낄 수 있다.",
    firstSong: ["숲", "유영", "https://www.youtube.com/watch?v=7ihLv8_Vd-4", choiyuree_유영],
    secondSong: [
      "밤, 바다",
      "여행 : 플리(playlist) OST Part.2",
      "https://www.youtube.com/watch?v=rKUmYKHu-FI",
      choiyuree_밤바다,
    ],
    thirdSong: [
      "잘 지내자, 우리",
      "잘 지내자, 우리",
      "https://www.youtube.com/watch?v=Z2tv0GyQdL8",
      choiyuree_잘지내자우리,
    ],
    fourthSong: [
      "그댄 행복에 살텐데",
      "그댄 행복에 살텐데(2022)",
      "https://www.youtube.com/watch?v=mwTnWKAvFyo",
      choiyuree_그댄행복에살텐데,
    ],
  },
  gummy: {
    picture: gummy,
    description:
      "거미(Gummy)는 2003년 데뷔 이후 꾸준히 사람들의 마음을 울리는 감성 보컬리스트로 자리매김한 가수다. 그녀의  특유의 깊은 감정 표현과 뛰어난 가창력으로 많은 이들의 사랑을 받았다. 거미의 목소리는 마치 마음을 어루만지는 듯한 따뜻함을 지니고 있어, '태양의 후예' OST <You Are My Everything>과 같은 드라마 OST로도 큰 인기를 끌었다. 지금도 여전히 그녀만의 감성으로 대중과 소통하며 음악 활동을 이어가고 있다.",
    firstSong: [
      "기억해줘요 내 모든 날과 그때를",
      "호텔 델루나 OST Part.7 (tvN 토일드라마)",
      "https://www.youtube.com/watch?v=fVHsD1lED84",
      gummy_기억해줘요내모든날과그때를,
    ],
    secondSong: [
      "You Are My Everythig",
      "태양의 후예 OST Part.4 (KBS2 수목드라마)",
      "https://www.youtube.com/watch?v=ToASX6axGuw",
      gummy_youaremyeverythig,
    ],
    thirdSong: [
      "친구라도 될 걸 그랬어",
      "Like Them",
      "https://www.youtube.com/watch?v=_Jj3P3bSQpQ",
      gummy_likethem,
    ],
    fourthSong: [
      "날 그만 잊어요",
      "Its Different",
      "https://www.youtube.com/watch?v=9tk6j8PUzD4",
      gummy_itsdifferent,
    ],
  },
};
