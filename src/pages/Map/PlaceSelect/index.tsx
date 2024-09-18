import { useCallback, useMemo, useState } from "react";

export default function usePlaceSelect() {
  const PLACE = useMemo(() => ["60주년기념관", "함인섭광장", "대운동장", "미래광장"] as const, []);
  const [place, setPlace] = useState<(typeof PLACE)[number]>(PLACE[0]);

  const PlaceSelect = useCallback(
    () => (
      <div>
        <select
          defaultValue={PLACE[0]}
          onChange={(e) => setPlace(e.target.value as (typeof PLACE)[number])}
        >
          {PLACE.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
    ),
    [PLACE],
  );

  return { place, PlaceSelect };
}
