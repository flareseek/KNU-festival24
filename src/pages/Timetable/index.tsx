import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { timeTableInfo } from "./timeTableInfo.ts";
import { timeTableFilterProps, timeTableInfoProps } from "../../shared/types/timeTable.ts";
import * as styles from "./.css.ts";
import { Link } from "react-router-dom";
import {artistInfoListProps} from "../../shared/types/mainPage.ts";

// Constants
const TIME_TABLE_FILTER: timeTableFilterProps[] = [
  { name: "1일차", date: new Date("2024-09-23T00:00:00+09:00") },
  { name: "2일차", date: new Date("2024-09-24T00:00:00+09:00") },
  { name: "3일차", date: new Date("2024-09-25T00:00:00+09:00") },
  { name: "4일차", date: new Date("2024-09-26T00:00:00+09:00") },
];

const START_DATE = new Date("2024-09-23T00:00:00+09:00");
const END_DATE = new Date("2024-09-26T00:00:00+09:00");

const clearTime = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false });
};

const getEventStatus = (
  event: timeTableInfoProps,
  currentTime: Date,
): "past" | "current" | "future" => {
  if (currentTime < event.startTime) return "future";
  if (currentTime > event.endTime) return "past";
  return "current";
};

// Sub-components
const FilterButton: React.FC<{
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
    <h3 className={styles.artistInfoTitle}>아티스트</h3>
    {artist.map((a: artistInfoListProps, index) => (
      <Link to={a.url} key={index} className={styles.artistItem}>
        <img src={a.image} alt={a.name} className={styles.artistImage} />
        <p className={styles.artistName}>{a.name}</p>
      </Link>
    ))}
  </div>
));

const TimeTableItem: React.FC<{
  timeTable: timeTableInfoProps;
  currentTime: Date;
  refCallback: (node: HTMLDivElement | null) => void;
}> = React.memo(({ timeTable, currentTime, refCallback }) => {
  const status = getEventStatus(timeTable, currentTime);

  return (
    <div className={`${styles.timeTableItem}`} ref={status === "current" ? refCallback : null}>
      <h2 className={styles.timeTableTitle}>{timeTable.title}</h2>
      {timeTable.descriptionShow && (
        <p className={styles.timeTableDescription}>{timeTable.description}</p>
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

// Main component
export default function Timetable() {
  const [viewTime, setViewTime] = useState<Date>(START_DATE);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const lastCurrentEventRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const today = clearTime(new Date());
    const start = clearTime(START_DATE);
    const end = clearTime(END_DATE);

    if (today >= start && today <= end) {
      setViewTime(today);
    } else {
      setViewTime(start);
    }

    // 현재 시간을 1분마다 업데이트
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const filteredTimeTableInfo = useMemo(
    () =>
      timeTableInfo
        .filter((timeTable) => clearTime(timeTable.date).getTime() === viewTime.getTime())
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime()),
    [viewTime],
  );

  useEffect(() => {
    // 진행 중인 마지막 요소로 스크롤
    if (lastCurrentEventRef.current) {
      if ("scrollIntoView" in lastCurrentEventRef.current) {
        lastCurrentEventRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [filteredTimeTableInfo]);

  const handleFilterClick = useCallback((date: Date) => {
    setViewTime(clearTime(date));
  }, []);

  return (
    <section className={styles.section}>
      <div>
        {TIME_TABLE_FILTER.map((timeTable, index) => (
          <FilterButton
            key={index}
            timeTable={timeTable}
            onClick={handleFilterClick}
            isActive={clearTime(timeTable.date).getTime() === viewTime.getTime()}
          />
        ))}
      </div>
      <div>
        {filteredTimeTableInfo.map((timeTable, index) => (
          <React.Fragment key={index}>
            {index > 0 && <hr className={styles.timeSeparator} />}
            <TimeTableItem
              timeTable={timeTable}
              currentTime={currentTime}
              refCallback={(node) => {
                if (node) lastCurrentEventRef.current = node;
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {TIME_TABLE_FILTER.map((timeTable, index) => (
        <FilterButton
          key={index}
          timeTable={timeTable}
          onClick={handleFilterClick}
          isActive={clearTime(timeTable.date).getTime() === viewTime.getTime()}
        />
      ))}
    </section>
  );
}
