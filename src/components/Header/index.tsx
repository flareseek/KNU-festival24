import React, { useEffect, useRef, useState, useCallback } from "react";
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

const isCurrentPath = (path: string, pathname: string): boolean =>
  !!matchPath({ path, end: true }, pathname);

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

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

  useEffect(() => {
    const currentRoute = RouterInfo.find((route) =>
      isCurrentPath(route.path, location.pathname)
    );
    setCurrentPage(currentRoute?.korean ?? "/");
    setIsActive(false);
    lottieRef.current?.setSpeed(1.5);
  }, [location.pathname]);

  return (
    <header className={headerStyles}>
      <Link to="/">
        <Logo className={logoStyles} />
      </Link>
      <span className={currentPageStyles}>{currentPage}</span>
      <Lottie
        animationData={Menu}
        className={toggleBtnStyles}
        onClick={handleToggle}
        lottieRef={lottieRef}
        autoplay={false}
        loop={false}
      />
      <nav className={`${menuStyles} ${isActive ? "active" : ""}`}>
        <ul className={menuListStyles}>
          {RouterInfo.filter((item) => item.expose)
            .sort((a: RouterInfoType, b: RouterInfoType) => a.korean.localeCompare(b.korean))
            .map((item) => (
              <li key={item.path} className={menuItemStyles}>
                <Link
                  to={item.path}
                  className={`${menuItemLinkStyles} ${
                    isCurrentPath(item.path, location.pathname)
                      ? highlightStyles
                      : ""
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