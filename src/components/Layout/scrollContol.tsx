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

import { useEffect } from "react";
import { useCurrentPage } from "../../shared/routing/routerUtils.ts";

let savedScrollY = 0;

const handleScroll = () => {
  savedScrollY = window.scrollY;
  console.log(window.scrollY);
};

export default function ScrollToTop({ children }: { children: React.ReactNode }) {
  const currentPage = useCurrentPage();

  useEffect(() => {
    if (currentPage.scrollOptions === "never") return;
    if (currentPage.scrollOptions === "save") {
      window.scrollTo(0, savedScrollY);
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return <div onClick={handleScroll}>{children}</div>;
}
