/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

import { Outlet } from "react-router-dom";
import "../../shared/styles/globalStyle.css";
import Header from "../Header";
import { Footer } from "../Footer";
import ScrollToTop from "./scrollContol";

// TODO: 모든 페이지에 공통으로 들어가는 레이아웃을 작성합니다. 필요 없으면 삭제해주세요
export default function Layout() {
  return (
    <div>
      <ScrollToTop>
        <Header />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </div>
  );
}
