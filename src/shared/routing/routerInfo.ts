import { lazy } from "react";
import { routerInfoType } from "../types/routing.ts";

export const routerInfo: routerInfoType[] = [
  {
    path: "/",
    element: lazy(() => import("../../pages/Main")),
    english: "Main",
    korean: "메인",
    expose: true,
    mainPage: false
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
    path: "booth/:id",
    element: lazy(() => import("../../pages/Booth")),
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
  },
  {
    path: "foodtruck/:id",
    element: lazy(() => import("../../pages/Foodtruck")),
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
    korean: "타임테이블",
    expose: true,
    mainPage: true,
  },
];

export default routerInfo;
