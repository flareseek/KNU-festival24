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

export const PLACE = ["60주년기념관", "함인섭광장", "대운동장", "미래광장"] as const;
export type Place = (typeof PLACE)[number];

export const PLACE_INFO = {
  "60주년기념관": [
    "60주년기념관에는 주점과 푸드트럭이 위치해 있습니다.",
    "테이블 위치는 1, 2, 3 구역입니다.",
    "",
    "주점 운영: 9.23(월) ~ 9.26(목) 18:00 ~ 1:00",
    "주류 판매 시간: 18:00 ~ 23:30",
  ],
  함인섭광장: [
    "함인섭광장에는 푸드트럭과 부스가 위치해 있습니다.",
    "",
    "부스 운영: 9.23(월) ~ 9.25(수) 11:00 ~ 17:00",
  ],
  대운동장: [
    "운동장에는 푸드트럭과 부스, MAIN STAGE가 위치해 있습니다.",
    "",
    "MAIN STAGE는 강원대생 중,",
    "팔찌 소지자부터 입장가능합니다.",
  ],
  미래광장: [
    "미래광장에는 주점과 푸드트럭이 위치해 있습니다.",
    "",
    "부스 운영: 9.23(월) ~ 9.25(수) 11:00 ~ 17:00",
    "주점 운영: 9.23(월) ~ 9.26(목) 18:00 ~ 00:00",
    "주류 판매 시간: 18:00 ~ 23:30",
  ],
};
