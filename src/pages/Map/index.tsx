import MapImg from "./MapImg";

import { PLACE, PLACE_INFO, Place } from "./mapData";
import { useTabs } from "../../shared/util/useTabs";

export default function Map() {
  const { activeTab, changeTab } = useTabs("place", [...PLACE]);
  return (
    <div>
      <select value={activeTab} onChange={(e) => changeTab(e.target.value)}>
        {PLACE.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      <MapImg place={activeTab} />
      <div>
        <button>
          <span className="material-symbols-outlined">list</span>
          리스트 전체 보기
        </button>
        <p>{PLACE_INFO[activeTab as Place]}</p>
      </div>
    </div>
  );
}
