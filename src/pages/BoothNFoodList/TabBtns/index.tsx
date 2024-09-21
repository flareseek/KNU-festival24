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
