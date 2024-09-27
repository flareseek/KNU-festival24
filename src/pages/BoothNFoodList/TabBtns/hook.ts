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

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { places, types } from "../dataMapping";

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
