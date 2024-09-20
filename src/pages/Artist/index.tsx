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

const id='Kwoneunbi';


function Artist() {
  return (
    <div>
      <div className={mid}>
        <img src={artistData[id].picture} className={artistPicContainer}></img>
        <div className={artistDetailContainer}>
          <div className={artistIntro}>
            <p className={artistIntroTitle}>아티스트 소개</p>
            <p className={artistIntroContent}>
              {artistData[id].description}
            </p>
          </div>

          <div className={artistSongsContainer}>
            <p className={artistIntroTitle}>아티스트 주요 인기곡</p>
            <div className={artistSongsList}>
              <a className={artistSong} href={artistData[id].firstSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artistData[id].firstSong[0]}</p>
                  <p className={albumTitle}>{artistData[id].firstSong[1]}</p>
                </div>
              
              </a>
              
              <a className={artistSong} href={artistData[id].secondSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artistData[id].secondSong[0]}</p>
                  <p className={albumTitle}>{artistData[id].secondSong[1]}</p>
                </div>
              
              </a>
              <a className={artistSong} href={artistData[id].thirdSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artistData[id].thirdSong[0]}</p>
                  <p className={albumTitle}>{artistData[id].thirdSong[1]}</p>
                </div>
              
              </a>
              <a className={artistSong} href={artistData[id].fourthSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artistData[id].fourthSong[0]}</p>
                  <p className={albumTitle}>{artistData[id].fourthSong[1]}</p>
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
