import ham_square_island from "/src/assets/ham_square_island.png";
import memorial_island from "/src/assets/memorial_island.png";
import mirea_square_island from "/src/assets/mirea_square_island.png";
import stadium_island from "/src/assets/stadium_island.png";

import { PLACE } from "../mapData";
import * as styles from "./index.css.ts";
import { HamSquareObjs, MemorialObjs, MireaSquareObjs, StadiumObjs } from "./Objs";

const islandList = [memorial_island, ham_square_island, stadium_island, mirea_square_island];

export default function MapImg({ placeNum }: { placeNum: number }) {
  return (
    <div className={styles.container}>
      <img className={styles.mapImg} src={islandList[placeNum]} alt={`${PLACE[placeNum]} 지도`} />
      <MireaSquareObjs />
    </div>
  );
}
