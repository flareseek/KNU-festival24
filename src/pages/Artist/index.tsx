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
import { artistData } from "./artistData.ts";

function Artist() {
  return (
    <div>
      <div className={mid}>
        <img src={artistData.Choiyuree.picture} className={artistPicContainer}></img>
        <div className={artistDetailContainer}>
          <div className={artistIntro}>
            <p className={artistIntroTitle}>아티스트 소개</p>
            <p className={artistIntroContent}>
              {artistData.Choiyuree.description}
            </p>
          </div>

          <div className={artistSongsContainer}>
            <p className={artistIntroTitle}>아티스트 주요 인기곡</p>
            <div className={artistSongsList}>
              <a className={artistSong} href={artistData.Choiyuree.firstSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artistData.Choiyuree.firstSong[0]}</p>
                  <p className={albumTitle}>{artistData.Choiyuree.firstSong[1]}</p>
                </div>
              
              </a>
              
              <a className={artistSong} href={artistData.Choiyuree.secondSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artistData.Choiyuree.secondSong[0]}</p>
                  <p className={albumTitle}>{artistData.Choiyuree.secondSong[1]}</p>
                </div>
              
              </a>
              <a className={artistSong} href={artistData.Choiyuree.thirdSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artistData.Choiyuree.thirdSong[0]}</p>
                  <p className={albumTitle}>{artistData.Choiyuree.thirdSong[1]}</p>
                </div>
              
              </a>
              <a className={artistSong} href={artistData.Choiyuree.fourthSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artistData.Choiyuree.fourthSong[0]}</p>
                  <p className={albumTitle}>{artistData.Choiyuree.fourthSong[1]}</p>
                </div>
              
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
