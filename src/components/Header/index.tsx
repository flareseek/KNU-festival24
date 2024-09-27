import React, { useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import routerInfo from "../../shared/routing/routerInfo";
import Logo from "../../assets/logo/logo.svg?react";
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
import { routerInfoType } from "../../shared/types/routing.ts";
import Lottie, { LottieRefCurrentProps } from "lottie-light-react";
import { useMediaQuery, useToggle } from "./customHooks.tsx";

import { isCurrentPath, useCurrentPage } from "../../shared/routing/routerUtils.ts";

/**
 * Header 컴포넌트
 * @component
 * @returns {React.ReactElement} Header 컴포넌트 요소
 */
const Header: React.FC = () => {
  const [isActive, toggleActive] = useToggle(false);
  const currentPage = useCurrentPage();
  const location = useLocation();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  const handleToggle = useCallback(() => {
    toggleActive();
    if (lottieRef.current) {
      lottieRef.current.playSegments(isActive ? [60, 120] : [0, 60], true);
    }
  }, [isActive, toggleActive]);

  /**
   * lottie 속도 조절
   */
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5);
    }
  }, []);

  /**
   * 데스크탑에서 페이지 이동 시 메뉴 닫기
   */
  useEffect(() => {
    if (isDesktop && isActive) {
      handleToggle();
    }
  }, [isDesktop, isActive, handleToggle]);

  /**
   * 컴포넌트 외부 클릭 감지
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        if (isActive) {
          handleToggle();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, handleToggle]);

  return (
    <header ref={headerRef} className={headerStyles}>
      {/*로고 부분*/}
      <Link to="/">
        <Logo className={logoStyles} />
      </Link>

      {/*현재 페이지 출력 부분*/}
      <span className={currentPageStyles}>{currentPage.korean}</span>

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
          {routerInfo
            .filter((item: routerInfoType) => item.expose)
            .sort((a: routerInfoType, b: routerInfoType) => a.korean.localeCompare(b.korean))
            .map((item: routerInfoType) => (
              <li key={item.path} className={menuItemStyles}>
                <Link
                  to={item.path}
                  className={`${menuItemLinkStyles} ${
                    isCurrentPath(item, location) ? highlightStyles : ""
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

export default React.memo(Header);
