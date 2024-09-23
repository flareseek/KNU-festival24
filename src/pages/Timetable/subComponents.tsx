import React from "react";
import { artistInfoListProps } from "../../shared/types/mainPage.ts";
import * as styles from ".css.ts";
import { Link } from "react-router-dom";
import { timeTableFilterProps, timeTableInfoProps } from "../../shared/types/timeTable.ts";

import { clearTime, formatTime, getEventStatus } from "./utils.tsx";

export const FilterButton: React.FC<{
  timeTable: timeTableFilterProps;
  onClick: (date: Date) => void;
  isActive: boolean;
}> = React.memo(({ timeTable, onClick, isActive }) => (
  <button
    className={isActive ? styles.filterButton.active : styles.filterButton.default}
    onClick={() => onClick(clearTime(timeTable.date))}
  >
    {timeTable.name}
  </button>
));
const ArtistInfo: React.FC<{
  artist: artistInfoListProps[];
}> = React.memo(({ artist }) => (
  <div className={styles.artistInfoContainer}>
    <h3 className={styles.artistInfoTitle}>상세정보</h3>
    {artist.map((a: artistInfoListProps, index) => (
      <Link to={a.url} key={index} className={styles.artistItem}>
        <img src={a.image} alt={a.name} className={styles.artistImage} />
        <p className={styles.artistName}>{a.name}</p>
      </Link>
    ))}
  </div>
));
export const TimeTableItem: React.FC<{
  timeTable: timeTableInfoProps;
  currentTime: Date;
  refCallback: (node: HTMLDivElement | null) => void;
}> = React.memo(({ timeTable, currentTime, refCallback }) => {
  const status = getEventStatus(timeTable, currentTime);

  return (
    <div className={`${styles.timeTableItem}`} ref={status === "current" ? refCallback : null}>
      <h2 className={styles.timeTableTitle}>{timeTable.title}</h2>
      {timeTable.descriptionShow && (
        <p className={styles.timeTableDescription}>
          {timeTable.description}
          {timeTable.link && (
            <a
              className={styles.timeTableLink}
              href={timeTable.link.url}
              target="_blank"
              rel="noreferrer"
            >
              {timeTable.link.text}
            </a>
          )}
        </p>
      )}
      <p className={styles.timeTableTime}>
        {timeTable.startTime.getMonth() + 1}/{timeTable.startTime.getDate()} |{" "}
        {formatTime(timeTable.startTime)} ~ {formatTime(timeTable.endTime)}
      </p>
      {timeTable.artist && <ArtistInfo artist={timeTable.artist} />}
      {status === "current" && <div className={styles.currentIndicator}>진행 중</div>}
    </div>
  );
});
