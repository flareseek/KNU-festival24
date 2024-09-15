import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import RouterInfo from "../../shared/routing/RouterInfo";
import Logo from "../../assets/logo.svg?react";
import Menu from "../../assets/menu_buton.json";
import {
  currentPageStyles,
  headerStyles,
  highlightStyles,
  logoStyles,
  menuItemLinkStyles,
  menuItemStyles,
  menuListStyles,
  menuStyles,
  toggleBtnStyles,
} from "./.css.ts";
import { RouterInfoType } from "../../shared/types/Route";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

/**
 * 현재 경로인지 확인하는 함수
 * @param path 비교할 경로
 * @param pathname 현재 경로(useLocation().pathname)
 * @return boolean
 */
const isCurrentPath = (path: string, pathname: string): boolean =>
  !!matchPath({ path, end: true }, pathname);

/**
 * Header 컴포넌트
 * @component
 * @returns {React.ReactElement} Header 컴포넌트 요소
 */
export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();

  // lottie 애니메이션을 제어하기 위한 ref | 참고: https://lottiereact.com/#calling-the-methods
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  /**
   * 토글 버튼 클릭 이벤트 핸들러
   * @function handleToggle
   * @return {void}
   */
  const handleToggle = useCallback(() => {
    setIsActive((prevState) => {
      const newState = !prevState;
      if (lottieRef.current) {
        if (newState) {
          lottieRef.current.playSegments([0, 60], true);
        } else {
          lottieRef.current.playSegments([60, 120], true);
        }
      }
      return newState;
    });
  }, []);

  /**
   * 컴포넌트가 마운트될 때 현재 페이지를 설정하고, isActive를 false로 초기화함
   */
  useEffect(() => {
    const currentRoute = RouterInfo.find((route) => isCurrentPath(route.path, location.pathname));
    setCurrentPage(currentRoute?.korean ?? "/");
    setIsActive(false);
    lottieRef.current?.setSpeed(1.5);
  }, [location.pathname]);

  return (
    <header className={headerStyles}>
      {/*로고 부분*/}
      <Link to="/">
        <Logo className={logoStyles} />
      </Link>

      {/*현재 페이지 출력 부분*/}
      <span className={currentPageStyles}>{currentPage}</span>

      {/*토글 버튼 (lottie)*/}
      <Lottie
        animationData={Menu}
        className={toggleBtnStyles}
        onClick={handleToggle}
        lottieRef={lottieRef}
        autoplay={false}
        loop={false}
      />

      {/*페이지 메뉴*/}
      <nav className={`${menuStyles} ${isActive ? "active" : ""}`}>
        <ul className={menuListStyles}>
          {RouterInfo.filter((item) => item.expose)
            .sort((a: RouterInfoType, b: RouterInfoType) => a.korean.localeCompare(b.korean))
            .map((item) => (
              <li key={item.path} className={menuItemStyles}>
                <Link
                  to={item.path}
                  className={`${menuItemLinkStyles} ${
                    isCurrentPath(item.path, location.pathname) ? highlightStyles : ""
                  }`}
                  onClick={handleToggle}
                >
                  {item.korean}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
