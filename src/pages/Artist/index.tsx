import { useParams } from "react-router-dom";
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

  const { id } = useParams<{ id: string }>(); // URL의 :id 파라미터를 가져옴

  // id가 존재하는지 확인하고 artistData에 해당 id가 있는지 체크
  if (!id || !(id in artistData)) {
    return <div>Artist not found</div>; // id가 없거나 artistData에 존재하지 않으면 예외 처리
  }

  // id에 해당하는 아티스트 정보를 가져옴
  const artist = artistData[id];


  return (
    <div>
      <div className={mid}>
        <img src={artist.picture} className={artistPicContainer}></img>
        <div className={artistDetailContainer}>
          <div className={artistIntro}>
            <p className={artistIntroTitle}>아티스트 소개</p>
            <p className={artistIntroContent}>
              {artist.description}
            </p>
          </div>

          <div className={artistSongsContainer}>
            <p className={artistIntroTitle}>아티스트 주요 인기곡</p>
            <div className={artistSongsList}>
              <a className={artistSong} href={artist.firstSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artist.firstSong[0]}</p>
                  <p className={albumTitle}>{artist.firstSong[1]}</p>
                </div>
              
              </a>
              
              <a className={artistSong} href={artist.secondSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artist.secondSong[0]}</p>
                  <p className={albumTitle}>{artist.secondSong[1]}</p>
                </div>
              
              </a>
              <a className={artistSong} href={artist.thirdSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artist.thirdSong[0]}</p>
                  <p className={albumTitle}>{artist.thirdSong[1]}</p>
                </div>
              
              </a>
              <a className={artistSong} href={artist.fourthSong[2]}>

                <div className={albumCover}></div>
                <div className={albumContainer}>
                  <p className={songTitle}>{artist.fourthSong[0]}</p>
                  <p className={albumTitle}>{artist.fourthSong[1]}</p>
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
