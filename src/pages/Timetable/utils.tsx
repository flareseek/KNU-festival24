/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

import { timeTableFilterProps, timeTableInfoProps } from "../../shared/types/timeTable.ts";

/**
 * 일별 필터 버튼
 * name: 버튼 이름
 * date: 필터링할 날짜
 */
export const TIME_TABLE_FILTER: timeTableFilterProps[] = [
  { name: "1일차", date: new Date("2024-09-23T00:00:00+09:00") },
  { name: "2일차", date: new Date("2024-09-24T00:00:00+09:00") },
  { name: "3일차", date: new Date("2024-09-25T00:00:00+09:00") },
  { name: "4일차", date: new Date("2024-09-26T00:00:00+09:00") },
];

/**
 * 축제 시작일
 */
export const START_DATE = new Date("2024-09-23T00:00:00+09:00");

/**
 * 축제 종료일
 */
export const END_DATE = new Date("2024-09-26T00:00:00+09:00");

/**
 * 시간을 00:00:00으로 설정 (날짜만 유지, 시간 초기화)
 * @param date 날짜
 */
export const clearTime = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

/**
 * Date 객체가 들어왔을때 시간을 mm:hh 형식으로 변환
 * @param date
 */
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false });
};

/**
 * 이벤트 상태 반환
 * @param event
 * @param currentTime past: 지난 이벤트, current: 현재 진행중인 이벤트, future: 미래 이벤트
 */
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
