import React, { useEffect, useState, useMemo, useCallback } from "react";
import { timeTableInfo } from "./timeTableInfo.ts";
import { timeTableFilterProps, timeTableInfoProps } from "../../shared/types/timeTable.ts";

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

// Sub-components
const FilterButton: React.FC<{
  timeTable: timeTableFilterProps;
  onClick: (date: Date) => void;
}> = React.memo(({ timeTable, onClick }) => (
  <button onClick={() => onClick(clearTime(timeTable.date))}>{timeTable.name}</button>
));

const ArtistInfo: React.FC<{
  artist: { name: string; image: string }[];
}> = React.memo(({ artist }) => (
  <div>
    <h3>아티스트</h3>
    {artist.map((a, index) => (
      <div key={index}>
        <img src={a.image} alt={a.name} />
        <p>{a.name}</p>
      </div>
    ))}
  </div>
));

const TimeTableItem: React.FC<{
  timeTable: timeTableInfoProps;
}> = React.memo(({ timeTable }) => (
  <div>
    <h2>{timeTable.title}</h2>
    {timeTable.descriptionShow && <p>{timeTable.description}</p>}
    <p>
      {formatTime(timeTable.startTime)} ~ {formatTime(timeTable.endTime)}
    </p>
    {timeTable.artist && <ArtistInfo artist={timeTable.artist} />}
  </div>
));

// Main component
export default function Timetable() {
  const [viewTime, setViewTime] = useState<Date>(START_DATE);

  useEffect(() => {
    const today = clearTime(new Date());
    const start = clearTime(START_DATE);
    const end = clearTime(END_DATE);

    if (today >= start && today <= end) {
      setViewTime(today);
    } else {
      setViewTime(start);
    }
  }, []);

  const handleFilterClick = useCallback((date: Date) => {
    setViewTime(clearTime(date));
  }, []);

  const filteredTimeTableInfo = useMemo(
    () =>
      timeTableInfo.filter(
        (timeTable) => clearTime(timeTable.date).getTime() === viewTime.getTime(),
      ),
    [viewTime],
  );

  return (
    <section>
      <div>
        {TIME_TABLE_FILTER.map((timeTable, index) => (
          <FilterButton key={index} timeTable={timeTable} onClick={handleFilterClick} />
        ))}
      </div>
      <div>
        {filteredTimeTableInfo.map((timeTable, index) => (
          <TimeTableItem key={index} timeTable={timeTable} />
        ))}
      </div>
    </section>
  );
}
