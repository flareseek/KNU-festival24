import { useState } from "react";

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
