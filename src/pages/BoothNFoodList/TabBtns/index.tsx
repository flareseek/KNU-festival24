import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import * as styles from "./indes.css";

/**
 * 탭 버튼 컴포넌트를 사용하기 위한 커스텀 훅
 * 활용 예시: const { activeTab, TabBtns } = useTabBtns(["탭1", "탭2", "탭3"]);
 * @param tabNames 탭 버튼 상태 배열
 * @returns activeTab: 현재 선택된 탭 상태, TabBtns: 탭 버튼 컴포넌트
 */
export default function useTabBtns(tabNames: string[], queryKey: string) {
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    // 처음 접속했을 떄 query에 값이 없으면 첫 번째 탭으로 설정
    const queryValue = searchParams.get(queryKey);
    if (queryValue && tabNames.includes(queryValue)) {
      setActiveTab(queryValue);
    } else {
      searchParams.set(queryKey, activeTab);
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeTab = (tabName: string) => {
    searchParams.set(queryKey, tabName);
    setSearchParams(searchParams);
    setActiveTab(tabName);
  };

  const TabBtns = ({ tabBtnNames }: { tabBtnNames?: string[] }) => {
    return (
      <div className={styles.tabBtns}>
        {tabNames.map((tabName, index) => (
          <button
            key={tabName}
            className={`${styles.tabBtn} ${activeTab === tabName ? styles.activeTabBtn : styles.inactiveTabBtn}`}
            onClick={() => changeTab(tabName)}
          >
            {tabBtnNames ? tabBtnNames[index] : tabName}
          </button>
        ))}
      </div>
    );
  };
  return { activeTab, TabBtns };
}
