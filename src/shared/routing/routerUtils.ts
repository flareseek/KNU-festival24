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

import { Location, matchPath, useLocation } from "react-router-dom";
import { routerInfoType } from "../types/routing.ts";
import routerInfo from "./routerInfo.ts";
import { useEffect, useState } from "react";

/**
 * 현재 경로인지 비교하는 함수
 * @param routerInfo - 라우터 정보 객체(routerInfo.ts)
 * @param pathname - 현재 경로(useLocation() from react-router-dom)
 */
export const isCurrentPath = (routerInfo: routerInfoType, pathname: Location): boolean => {
  const path = routerInfo.path;
  const _pathname = pathname.pathname;
  return !!matchPath({ path, end: true }, _pathname);
};

/**
 * 현재 페이지 객체를 반환하는 커스텀 훅
 * @returns currentPage
 */
export const useCurrentPage = (): routerInfoType => {
  const nullPage: routerInfoType = routerInfo[0];
  /*******************************************
   * you can change to 404 page
   * or make props to set component for 404 page
   * Can be extended to handle custom 404 components.
   * For inquiries, contact: jjh4450git@gmail.com
   *******************************************/
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(nullPage);

  useEffect(() => {
    const currentRoute = routerInfo.find((route) => isCurrentPath(route, location));
    setCurrentPage(currentRoute ?? nullPage);
  }, [nullPage, location]);

  return currentPage;
};
