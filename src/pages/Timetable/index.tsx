import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { timeTableInfo } from "./timeTableInfo.ts";
import * as styles from "./.css.ts";
import { FilterButton, TimeTableItem } from "./subComponents.tsx";
import { clearTime, END_DATE, START_DATE, TIME_TABLE_FILTER } from "./utils.tsx";

export default function Timetable() {
  const [viewTime, setViewTime] = useState<Date>(START_DATE);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const lastCurrentEventRef = useRef<HTMLDivElement | null>(null);

  /**
   * 현재 날짜에 맞게 기준시간 설정
   */
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

  /**
   * 필터링된 타임테이블 정보
   * @see timeTableInfo
   * @see useMemo
   */
  const filteredTimeTableInfo = useMemo(
    () =>
      timeTableInfo
        .filter((timeTable) => clearTime(timeTable.date).getTime() === viewTime.getTime())
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime()),
    [viewTime],
  );

  /**
   * 현재 진행중인 이벤트로 스크롤
   */
  useEffect(() => {
    // 진행 중인 마지막 요소로 스크롤
    if (lastCurrentEventRef.current) {
      if ("scrollIntoView" in lastCurrentEventRef.current) {
        lastCurrentEventRef.current.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [filteredTimeTableInfo]);

  /**
   * 필터 클릭 이벤트
   */
  const handleFilterClick = useCallback((date: Date) => {
    setViewTime(clearTime(date));
  }, []);

  /**
   * 렌더링
   */
  return (
    <section className={styles.section}>
      {/*상단 필터링 버튼*/}
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
      {/*필터링된 타임테이블 정보*/}ㄴ
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
      {/*하단 필터링 버튼*/}
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
    </section>
  );
}
