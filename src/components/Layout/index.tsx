import { Outlet } from "react-router-dom";
import "../../shared/styles/globalStyle.css";
import Header from "../Header";

// TODO: 모든 페이지에 공통으로 들어가는 레이아웃을 작성합니다. 필요 없으면 삭제해주세요
export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
