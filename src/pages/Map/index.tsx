import MapImg from "./MapImg";

import { PLACE, PLACE_INFO, Place } from "./mapData";
import { useTabs } from "../../shared/util/useTabs";

import * as styles from "./index.css.ts";

export default function Map() {
  const { activeTab, changeTab } = useTabs("place", [...PLACE]);
  return (
    <div>
      <div className={styles.selectContainer}>
        <div />
        <select
          className={styles.select}
          value={activeTab}
          onChange={(e) => changeTab(e.target.value)}
        >
          {PLACE.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <MapImg place={activeTab} />
      <div className={styles.bottomContainer}>
        <button className={styles.detailBtn}>
          <span className="material-symbols-outlined">list</span>
          리스트 전체 보기
        </button>
        <p className={styles.notice}>
          {PLACE_INFO[activeTab as Place].map((v, i) => (
            <span key={i}>
              {v}
              <br />
            </span>
          ))}
        </p>
      </div>
      <div className={styles.fake} />
    </div>
  );
}
