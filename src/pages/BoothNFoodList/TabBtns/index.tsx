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

import * as styles from "./index.css.ts";

import { places, types } from "../dataMapping";

export default function TabBtns({
  activePlace,
  activeType,
  changeTab,
  color,
}: {
  activePlace: (typeof places)[number];
  activeType: string;
  changeTab: (key: "place" | "type", value: string) => void;
  color: string;
}) {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabContainer}>
        {places.map((place) => (
          <button
            className={`${styles.tabBtn} ${styles.topBtns} ${place === activePlace ? styles.activeTopBtn : ""}`}
            key={place}
            onClick={() => changeTab("place", place)}
          >
            {place}
          </button>
        ))}
      </div>
      <div className={`${styles.tabContainer} ${styles.bottomTabContainer}`}>
        {types[activePlace].map((type) => (
          <button
            className={`${styles.tabBtn} ${styles.bottomBtns} ${type === activeType ? styles.activeBottomBtn : ""}`}
            key={type}
            style={type === activeType ? { backgroundColor: color } : {}}
            onClick={() => changeTab("type", type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
