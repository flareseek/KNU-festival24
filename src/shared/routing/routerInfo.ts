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

import { lazy } from "react";
import { routerInfoType } from "../types/routing.ts";

export const routerInfo: routerInfoType[] = [
  {
    path: "/",
    element: lazy(() => import("../../pages/Main")),
    english: "Main",
    korean: "메인",
    expose: true,
    mainPage: false,
  },
  {
    path: "artist/:id",
    element: lazy(() => import("../../pages/Artist")),
    english: "Artist",
    korean: "아티스트",
    expose: false,
    mainPage: false,
  },
  {
    path: "booth_foodtruck_list/booth/:id",
    element: lazy(() => import("../../pages/BoothNFoodDetail")),
    english: "Booth",
    korean: "부스",
    expose: false,
    mainPage: false,
  },
  {
    path: "booth_foodtruck_list",
    element: lazy(() => import("../../pages/BoothNFoodList")),
    english: "Booth & Foodtruck List",
    korean: "부스 & 푸드트럭 리스트",
    expose: true,
    mainPage: true,
    scrollOptions: "save", //example
  },
  {
    path: "booth_foodtruck_list/foodtruck/:id",
    element: lazy(() => import("../../pages/BoothNFoodDetail")),
    english: "Foodtruck",
    korean: "푸드트럭",
    expose: false,
    mainPage: false,
  },
  {
    path: "makers",
    element: lazy(() => import("../../pages/Makers")),
    english: "Makers",
    korean: "메이커스",
    expose: false,
    mainPage: false,
  },
  {
    path: "map",
    element: lazy(() => import("../../pages/Map")),
    english: "Map",
    korean: "지도",
    expose: true,
    mainPage: false,
  },
  {
    path: "notice",
    element: lazy(() => import("../../pages/Notice")),
    english: "Notice",
    korean: "공지사항",
    expose: true,
    mainPage: true,
  },
  {
    path: "QnA",
    element: lazy(() => import("../../pages/QnA")),
    english: "QnA",
    korean: "QnA",
    expose: true,
    mainPage: true,
  },
  {
    path: "timetable",
    element: lazy(() => import("../../pages/Timetable")),
    english: "Timetable",
    korean: "축제 일정",
    expose: true,
    mainPage: true,
    scrollOptions: "never",
  },
  {
    path: "site_info",
    element: lazy(() => import("../../components/SiteInfo")),
    english: "Site Information",
    korean: "사이트 정보",
    expose: false,
    mainPage: false,
  },
];

export default routerInfo;
