import { Outlet, useLocation } from "react-router-dom";
import "../../shared/styles/globalStyle.css";
import Header from "../Header";
import { Footer } from "../Footer";
import { useEffect } from "react";

// TODO: 모든 페이지에 공통으로 들어가는 레이아웃을 작성합니다. 필요 없으면 삭제해주세요
export default function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
