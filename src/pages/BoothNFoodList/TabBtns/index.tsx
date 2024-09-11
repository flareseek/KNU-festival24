import { useState } from "react";

// TODO: 타임테이블에서 가져다 써도 될 것 같아요
/**
 * 탭 버튼 컴포넌트를 사용하기 위한 커스텀 훅
 * 활용 예시: const { activeTab, TabBtns } = useTabBtns(["탭1", "탭2", "탭3"]);
 * @param tabNames 탭 버튼 상태 배열
 * @returns activeTab: 현재 선택된 탭 상태, TabBtns: 탭 버튼 컴포넌트
 */
export default function useTabBtns(tabNames: string[]) {
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const TabBtns = ({ tabBtnNames }: { tabBtnNames?: string[] }) => {
    return (
      <div>
        {tabNames.map((tabName, index) => (
          <button key={tabName} onClick={() => setActiveTab(tabName)}>
            {tabBtnNames ? tabBtnNames[index] : tabName}
          </button>
        ))}
      </div>
    );
  };
  return { activeTab, TabBtns };
}
