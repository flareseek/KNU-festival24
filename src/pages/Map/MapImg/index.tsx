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

import ham_square_island from "/src/assets/island/ham_square_island.png";
import memorial_island from "/src/assets/island/memorial_island.png";
import mirea_square_island from "/src/assets/island/mirea_square_island.png";
import stadium_island from "/src/assets/island/stadium_island.png";

import { Place } from "../mapData";
import * as styles from "./index.css.ts";
import { HamSquareObjs, MemorialObjs, MireaSquareObjs, StadiumObjs } from "./Objs";

const placeMap = {
  "60주년기념관": {
    img: memorial_island,
    objs: <MemorialObjs />,
  },
  함인섭광장: {
    img: ham_square_island,
    objs: <HamSquareObjs />,
  },
  대운동장: {
    img: stadium_island,
    objs: <StadiumObjs />,
  },
  미래광장: {
    img: mirea_square_island,
    objs: <MireaSquareObjs />,
  },
} as const;

export default function MapImg({ place }: { place: string }) {
  return (
    <div className={styles.container}>
      <img className={styles.mapImg} src={placeMap[place as Place].img} alt={`${place} 지도`} />
      {placeMap[place as Place].objs}
    </div>
  );
}
