import {
  mid,
  artistPicContainer,
  artistIntro,
  artistIntroTitle,
  artistIntroContent,
  artistSongsContainer,
  artistSongsList,
  artistSong,
  albumCover,
  albumContainer,
  songTitle,
  albumTitle,
  artistDetailContainer,
} from "./artist.css.ts"; // 스타일 가져오기

function Artist() {
  return (
    <div>
      <div className={mid}>
        <div className={artistPicContainer}></div>
        <div className={artistDetailContainer}>
          <div className={artistIntro}>
            <p className={artistIntroTitle}>아티스트 소개</p>
            <p className={artistIntroContent}>
              DAY6는 2015년 JYP 엔터테인먼트에서 데뷔한 5인조 보이 밴드로, 멤버들은 성진(리더, 기타,
              보컬), Young K(베이스, 보컬), 원필(키보드, 보컬), 도운(드럼)으로 구성되어 있습니다.
              DAY6는 K-팝 밴드로서의 정체성을 확립하며, 감성적인 록과 팝 록을 주된 장르로 활동하고
              있습니다. 모든 멤버들이 작사, 작곡에 참여하며, 이들의 음악은 진솔한 가사와 강렬한
              멜로디로 많은 팬들의 사랑을 받고 있습니다.
            </p>
          </div>

          <div className={artistSongsContainer}>
            <p className={artistIntroTitle}>아티스트 주요 인기곡</p>
            <div className={artistSongsList}>
              <div className={artistSong}>
                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>Welcome to the show</p>
                  <p className={albumTitle}>Fourever - EP - 2024년</p>
                </div>
              </div>
              <div className={artistSong}>
                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>Welcome to the show</p>
                  <p className={albumTitle}>Fourever - EP - 2024년</p>
                </div>
              </div>
              <div className={artistSong}>
                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>Welcome to the show</p>
                  <p className={albumTitle}>Fourever - EP - 2024년</p>
                </div>
              </div>
              <div className={artistSong}>
                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>Welcome to the show</p>
                  <p className={albumTitle}>Fourever - EP - 2024년</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
