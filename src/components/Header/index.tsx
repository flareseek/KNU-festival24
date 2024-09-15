import React, { useEffect, useRef, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import RouterInfo from "../../shared/routing/RouterInfo.tsx";
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

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleToggle = () => {
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
  };

  useEffect(() => {
    const currentRoute = RouterInfo.find((route) =>
      matchPath({ path: route.path, end: true }, location.pathname)
    );
    setCurrentPage(currentRoute ? currentRoute.korean : "/");
    setIsActive(false);
    lottieRef.current?.setSpeed(1.2);
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
          {RouterInfo.sort((a: RouterInfoType, b: RouterInfoType) =>
            a.korean.localeCompare(b.korean)
          ).map(
            (item) =>
              item.expose && (
                <li key={item.path} className={menuItemStyles}>
                  <Link
                    to={item.path}
                    className={`${menuItemLinkStyles} ${
                      matchPath({ path: item.path, end: true }, location.pathname)
                        ? highlightStyles
                        : ""
                    }`}
                    onClick={handleToggle}
                  >
                    {item.korean}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;