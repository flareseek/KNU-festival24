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
