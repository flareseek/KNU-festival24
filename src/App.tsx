import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/index.tsx";
import Main from "./pages/Main/index.tsx";
import Artist from "./pages/Artist/index.tsx";
import BoothNFoodList from "./pages/BoothNFoodList/index.tsx";
import BoothNFoodDetail from "./pages/BoothNFoodDetail/index.tsx";
import Makers from "./pages/Makers/index.tsx";
import Map from "./pages/Map/index.tsx";
import Notice from "./pages/Notice/index.tsx";
import QnA from "./pages/QnA/index.tsx";
import Timetable from "./pages/Timetable/index.tsx";

const RouterPath = [
  {
    path: "",
    element: <Main />,
  },
  {
    path: "artist/:id",
    element: <Artist />,
  },
  {
    path: "booth_foodtruck_list",
    element: <BoothNFoodList />,
  },
  {
    path: "booth_foodtruck_list/booth/:id",
    element: <BoothNFoodDetail />,
  },
  {
    path: "booth_foodtruck_list/foodtruck/:id",
    element: <BoothNFoodDetail />,
  },
  {
    path: "makers",
    element: <Makers />,
  },
  {
    path: "map",
    element: <Map />,
  },
  {
    path: "notice",
    element: <Notice />,
  },
  {
    path: "QnA",
    element: <QnA />,
  },
  {
    path: "timetable",
    element: <Timetable />,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: RouterPath,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
