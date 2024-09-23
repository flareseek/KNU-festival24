import { timeTableFilterProps, timeTableInfoProps } from "../../shared/types/timeTable.ts";

export const TIME_TABLE_FILTER: timeTableFilterProps[] = [
  { name: "1일차", date: new Date("2024-09-23T00:00:00+09:00") },
  { name: "2일차", date: new Date("2024-09-24T00:00:00+09:00") },
  { name: "3일차", date: new Date("2024-09-25T00:00:00+09:00") },
  { name: "4일차", date: new Date("2024-09-26T00:00:00+09:00") },
];
export const START_DATE = new Date("2024-09-23T00:00:00+09:00");
export const END_DATE = new Date("2024-09-26T00:00:00+09:00");
export const clearTime = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false });
};
export const getEventStatus = (
  event: timeTableInfoProps,
  currentTime: Date,
): "past" | "current" | "future" => {
  let adjustedStartTime = new Date(event.startTime);

  // KNU-ARTIST 항목에 대한 시작 시간 조정
  if (event.description.includes("KNU-ARTIST")) {
    if (event.description.includes("댄스")) {
      adjustedStartTime = new Date(adjustedStartTime.getTime() - 5 * 60000);
    } else if (event.description.includes("밴드")) {
      adjustedStartTime = new Date(adjustedStartTime.getTime() - 4 * 60000);
    }
  }

  if (currentTime < adjustedStartTime) return "future";
  if (currentTime > event.endTime) return "past";
  return "current";
};
