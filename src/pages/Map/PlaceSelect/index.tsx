import { useCallback, useState } from "react";
import { PLACE } from "../mapData";

export default function usePlaceSelect() {
  const [placeNum, setPlaceNum] = useState(0);

  const PlaceSelect = useCallback(
    () => (
      <div>
        <select defaultValue={0} onChange={(e) => setPlaceNum(Number(e.target.value))}>
          {PLACE.map((p, i) => (
            <option key={p} value={i}>
              {p}
            </option>
          ))}
        </select>
      </div>
    ),
    [],
  );

  return { placeNum, PlaceSelect };
}
