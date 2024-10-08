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

import React from "react";
import { artistInfoListProps } from "../../shared/types/mainPage.ts";
import * as styles from "./.css.ts";
import { Link } from "react-router-dom";
import { timeTableFilterProps, timeTableInfoProps } from "../../shared/types/timeTable.ts";
import { clearTime, formatTime, getEventStatus } from "./utils.tsx";

/**
 * 일별 필터 버튼
 */
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

/**
 * 아티스트 정보
 * @param artist 아티스트 정보
 * @see artistInfoListProps
 */
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

/**
 * 타임테이블 아이템
 * @param timeTable 타임테이블 정보
 * @param currentTime 현재 시간
 * @param refCallback 현재 진행중인 이벤트를 가리키기 위한 콜백
 */
export const TimeTableItem: React.FC<{
  timeTable: timeTableInfoProps;
  currentTime: Date;
  refCallback: (node: HTMLDivElement | null) => void;
}> = React.memo(({ timeTable, currentTime, refCallback }) => {
  const status = getEventStatus(timeTable, currentTime);

  return (
    <div
      className={`${styles.timeTableItem} ${status === "current" && styles.timeTableHighlight}`}
      ref={status === "current" ? refCallback : null}
    >
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
