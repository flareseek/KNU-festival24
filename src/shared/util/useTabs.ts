import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useTabs = (queryParam: string, tabNames: string[]) => {
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const queryValue = searchParams.get(queryParam);
    if (queryValue && tabNames.includes(queryValue)) {
      setActiveTab(queryValue);
    } else {
      searchParams.set(queryParam, activeTab);
      setSearchParams(searchParams, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeTab = (tabName: string) => {
    if (!tabNames.includes(tabName)) return;
    searchParams.set(queryParam, tabName);
    setActiveTab(tabName);
    setSearchParams(searchParams, { replace: true });
  };

  return { activeTab, changeTab };
};

// TODO: 리소스에서 장소 리스트 받아오기
const places = ["60주년기념관", "대운동장", "함인섭광장", "미래광장"] as const;
const types = {
  "60주년기념관": ["booth", "foodtruck", "ddd"],
  대운동장: ["booth", "foodtruck"],
  함인섭광장: ["booth", "foodtruck"],
  미래광장: ["booth", "foodtruck"],
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
    if (type && types[activePlace].includes(type)) {
      setActiveType(type);
    } else {
      searchParams.set("type", activeType);
    }

    setSearchParams(searchParams, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeTab = (key: "place" | "type", value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams, { replace: true });
    if (key === "place") {
      setActivePlace(value as (typeof places)[number]);
    } else {
      setActiveType(value);
    }
  };
  return { activePlace, activeType, changeTab };
};
