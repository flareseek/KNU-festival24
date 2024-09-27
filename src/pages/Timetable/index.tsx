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

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { timeTableInfo } from "./timeTableInfo.ts";
import * as styles from "./.css.ts";
import { FilterButton, TimeTableItem } from "./subComponents.tsx";
import { clearTime, END_DATE, START_DATE, TIME_TABLE_FILTER } from "./utils.tsx";

/**
 * 타임테이블 페이지
 */
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
    if (
      lastCurrentEventRef.current &&
      clearTime(currentTime).getTime() === clearTime(viewTime).getTime()
    ) {
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offset = rootFontSize * 3.75;

      const elementPosition =
        lastCurrentEventRef.current!.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
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
      <div className={styles.dayFilter}>
        {TIME_TABLE_FILTER.map((timeTable, index) => (
          <FilterButton
            key={index}
            timeTable={timeTable}
            onClick={handleFilterClick}
            isActive={clearTime(timeTable.date).getTime() === viewTime.getTime()}
          />
        ))}
      </div>
      {/*필터링된 타임테이블 정보*/}
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
