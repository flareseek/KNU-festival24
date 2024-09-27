/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

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
            <p className={artistIntroContent}>{artist.description}</p>
          </div>

          <div className={artistSongsContainer}>
            <p className={artistIntroTitle}>아티스트 주요 인기곡</p>
            <div className={artistSongsList}>
              <a className={artistSong} href={artist.firstSong[2]}>
                <img src={artist.firstSong[3]} className={albumCover}></img>
                <div className={albumContainer}>
                  <p className={songTitle}>{artist.firstSong[0]}</p>
                  <p className={albumTitle}>{artist.firstSong[1]}</p>
                </div>
              </a>

              <a className={artistSong} href={artist.secondSong[2]}>
                <img src={artist.secondSong[3]} className={albumCover}></img>
                <div className={albumContainer}>
                  <p className={songTitle}>{artist.secondSong[0]}</p>
                  <p className={albumTitle}>{artist.secondSong[1]}</p>
                </div>
              </a>
              <a className={artistSong} href={artist.thirdSong[2]}>
                <img src={artist.thirdSong[3]} className={albumCover}></img>
                <div className={albumContainer}>
                  <p className={songTitle}>{artist.thirdSong[0]}</p>
                  <p className={albumTitle}>{artist.thirdSong[1]}</p>
                </div>
              </a>
              <a className={artistSong} href={artist.fourthSong[2]}>
                <img src={artist.fourthSong[3]} className={albumCover}></img>
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
