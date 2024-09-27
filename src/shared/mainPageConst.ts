/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * 
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions 
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 * 
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

/**
 * 메인페이지에 아직 라우터가 잡히지 않은 페이지들의 경로를 미리 지정해놓은 파일입니다.
 * 해당 페이지 제작후 아래 상수들을 사용하시면 됩니다.
 * @author jjh4450git@gmail.com
 */

//<Link className={mainPageArtistInfoStyle} to={`artist/${info.url}`}>
//아티스트는 url이 확정 됐기 때문에 `artist/${info.url}로 구성했습니다. 고유 id만 입력하시면 됩니다.
export const ARTIST_APINK_URL: string = "apink";
export const ARTIST_ROY_URL: string = "roykim";
export const ARTIST_GLEN_CENCK_URL: string = "glencheck";
export const ARTIST_CREESPY_URL: string = "creespy";
export const ARTIST_KWON_EUNBI_URL: string = "kwoneunbi";
export const ARTIST_CHOI_YU_REE_URL: string = "choiyuree";
export const ARTIST_GUMMY_URL: string = "gummy";

//<Link className={mainPageMapStyle} to={url}>
//세부 지도는 아직 라우터가 잡히지 않아 별로의 경로를 사전에 지정하지 않았습니다.
export const MAP_HAM_URL: string = "/map?place=함인섭광장";
export const MAP_60TH_URL: string = "/map?place=60주년기념관";
export const MAP_HAM_MIREA_URL: string = "/map?place=미래광장";
export const MAP_STADIUM_URL: string = "/map?place=대운동장";
