import { RouterInfoType } from "../types/Route.ts";
import Main from "../../pages/Main";
import Artist from "../../pages/Artist";
import Booth from "../../pages/Booth";
import BoothNFoodList from "../../pages/BoothNFoodList";
import Foodtruck from "../../pages/Foodtruck";
import Makers from "../../pages/Makers";
import Map from "../../pages/Map";
import Notice from "../../pages/Notice";
import QnA from "../../pages/QnA";
import Timetable from "../../pages/Timetable";

export const RouterInfo: RouterInfoType [] = [
    {
        path: "/",
        element: <Main />,
        english: "Main",
        korean: "메인",
        expose: true,
    },
    {
        path: "artist/:id",
        element: <Artist />,
        english: "Artist",
        korean: "아티스트",
        expose: false,
    },
    {
        path: "booth/:id",
        element: <Booth />,
        english: "Booth",
        korean: "부스",
        expose: false,
    },
    {
        path: "booth_foodtruck_list",
        element: <BoothNFoodList />,
        english: "Booth & Foodtruck List",
        korean: "부스 & 푸드트럭 리스트",
        expose: true,
    },
    {
        path: "foodtruck/:id",
        element: <Foodtruck />,
        english: "Foodtruck",
        korean: "푸드트럭",
        expose: false,
    },
    {
        path: "makers",
        element: <Makers />,
        english: "Makers",
        korean: "메이커스",
        expose: false,
    },
    {
        path: "map",
        element: <Map />,
        english: "Map",
        korean: "지도",
        expose: true,
    },
    {
        path: "notice",
        element: <Notice />,
        english: "Notice",
        korean: "공지사항",
        expose: true,
    },
    {
        path: "QnA",
        element: <QnA />,
        english: "QnA",
        korean: "QnA",
        expose: true,
    },
    {
        path: "timetable",
        element: <Timetable />,
        english: "Timetable",
        korean: "타임테이블",
        expose: true,
    },
];

export default RouterInfo;
