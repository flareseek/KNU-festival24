import { useState } from "react";
import MapImg from "./MapImg";

import { PLACE, PLACE_INFO } from "./mapData";

export default function Map() {
  const [placeNum, setPlaceNum] = useState(0);
  return (
    <div>
      <select defaultValue={0} onChange={(e) => setPlaceNum(Number(e.target.value))}>
        {PLACE.map((p, i) => (
          <option key={p} value={i}>
            {p}
          </option>
        ))}
      </select>
      <MapImg placeNum={placeNum} />
      <div>
        <button>
          <span className="material-symbols-outlined">list</span>
          리스트 전체 보기
        </button>
        <p>{PLACE_INFO[placeNum]}</p>
      </div>
    </div>
  );
}
