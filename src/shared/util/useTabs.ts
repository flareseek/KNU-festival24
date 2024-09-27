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

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useTabs = (queryParam: string, tabNames: string[]) => {
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const queryValue = searchParams.get(queryParam);
    if (queryValue && tabNames.includes(queryValue)) {
      setActiveTab(queryValue);
    } else {
      searchParams.set(queryParam, activeTab);
      setSearchParams(searchParams, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeTab = (tabName: string) => {
    if (!tabNames.includes(tabName)) return;
    searchParams.set(queryParam, tabName);
    setActiveTab(tabName);
    setSearchParams(searchParams, { replace: true });
  };

  return { activeTab, changeTab };
};
