import React from "react";

interface ActivityTabProps {
  tabTitle: string;
  tabId: number;
  onClick: () => void;
  activeTab: number;
}

const ActivityTab: React.FC<ActivityTabProps> = ({
  tabTitle,
  tabId,
  onClick,
  activeTab,
}) => {
  return (
    <p
      className={`flex cursor-pointer ${
        activeTab === tabId ? "underline" : ""
      }`}
      onClick={onClick}>
      {tabTitle}
    </p>
  );
};

export default ActivityTab;
