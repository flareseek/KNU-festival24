import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const places = ["60주년기념관", "대운동장", "함인섭광장", "미래광장"] as const;
export const types = {
  "60주년기념관": ["부스", "푸드트럭"],
  대운동장: ["부스(분홍)", "부스(노랑)", "부스(파랑)"],
  함인섭광장: ["부스", "푸드트럭"],
  미래광장: ["부스", "푸드트럭"],
};
export const useBoothNFoodtruckTabs = () => {
  const [activePlace, setActivePlace] = useState<(typeof places)[number]>(places[0]);
  const [activeType, setActiveType] = useState(types[activePlace][0]);

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const place = searchParams.get("place") as (typeof places)[number];
    if (place && places.includes(place)) {
      setActivePlace(place);
    } else {
      searchParams.set("place", activePlace);
    }

    const type = searchParams.get("type");
    if (type && types[place].includes(type)) {
      setActiveType(type);
    } else {
      searchParams.set("type", activeType);
    }

    setSearchParams(searchParams, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeTab = (key: "place" | "type", value: string) => {
    searchParams.set(key, value);
    if (key === "place") {
      setActivePlace(value as (typeof places)[number]);

      const type = searchParams.get("type");
      if (type && !types[value as (typeof places)[number]].includes(type)) {
        setActiveType(types[value as (typeof places)[number]][0]);
        searchParams.set("type", types[value as (typeof places)[number]][0]);
      }
    } else {
      setActiveType(value);
    }
    setSearchParams(searchParams, { replace: true });
  };
  return { activePlace, activeType, changeTab };
};
