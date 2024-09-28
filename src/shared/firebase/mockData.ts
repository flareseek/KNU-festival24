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

import { NoticeDto } from "../types/notice.ts";

export const noticeData: NoticeDto[] = [
  {
    id: "1",
    createdAt: new Date(),
    order: 1,
    renewal: true,
    title: "2024 강원대학교 백령대동제 개최 안내",
    contents: "백엔드 서버 서비스 종료에 따라 임시 데이터를 제공합니다. a",
  },
  {
    id: "2",
    createdAt: new Date(),
    order: 2,
    renewal: true,
    title: "2024 강원대학교 백령대동제 개최 안내",
    contents: "백엔드 서버 서비스 종료에 따라 임시 데이터를 제공합니다. b",
  },
  {
    id: "3",
    createdAt: new Date(),
    order: 3,
    renewal: true,
    title: "신규 게시물",
    contents: "백엔드 서버 서비스 종료에 따라 임시 데이터를 제공합니다. c",
  },
  {
    id: "4",
    createdAt: new Date(),
    order: 4,
    renewal: false,
    title: "2024 강원대학교 백령대동제 개최 안내",
    contents: "백엔드 서버 서비스 종료에 따라 임시 데이터를 제공합니다. d",
  },
  {
    id: "5",
    createdAt: new Date(),
    order: 5,
    renewal: false,
    title: "신규 게시물",
    contents: "백엔드 서버 서비스 종료에 따라 임시 데이터를 제공합니다. e",
  },
  {
    id: "6",
    createdAt: new Date(),
    order: 6,
    renewal: false,
    title: "2024 강원대학교 백령대동제 개최 안내",
    contents: "백엔드 서버 서비스 종료에 따라 임시 데이터를 제공합니다. f",
  },
  {
    id: "7",
    createdAt: new Date(),
    order: 7,
    renewal: false,
    title: "신규 게시물",
    contents: "백엔드 서버 서비스 종료에 따라 임시 데이터를 제공합니다. g",
  },
  {
    id: "8",
    createdAt: new Date(),
    order: 8,
    renewal: false,
    title: "2024 강원대학교 백령대동제 개최 안내",
    contents: "여기는 룰루입니다. Notice 1에 대한 정보가 더 있습니다. h",
  },
  {
    id: "9",
    createdAt: new Date(),
    order: 9,
    renewal: false,
    title: "신규 게시물",
    contents: "여기는 부스내용입니다. Notice 1에 대한 정보가 더 있습니다. i",
  },
];
