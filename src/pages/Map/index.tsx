import MapImg from "./MapImg";

import { PLACE, PLACE_INFO, Place } from "./mapData";
import { useTabs } from "../../shared/util/useTabs";

import * as styles from "./index.css.ts";
import { useNavigate } from "react-router-dom";

export default function Map() {
  const navigator = useNavigate();
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
      <p className={styles.text}>텍스트나 이미지를 클릭하시면 세부정보를 확인할 수 있습니다.</p>
      <MapImg place={activeTab} />
      <div className={styles.bottomContainer}>
        <button
          onClick={() => navigator(`/booth_foodtruck_list?place=${activeTab}`)}
          className={styles.detailBtn}
        >
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
