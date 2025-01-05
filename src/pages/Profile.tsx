import { getUserInfo } from "@/api/apis";
import ActivityTab from "@/components/Profile/ActivityTab";
import Chart from "@/components/Profile/Chart";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import { useEffect, useState } from "react";

const userData = {
  id: "1",
  userId: "user1", // 가입한 id
  username: "전지현", // 닉네임
  mbti: "INTP",
};

const userActivityTab = [
  {
    id: 1,
    title: "게시글",
  },
  {
    id: 2,
    title: "댓글",
  },
  { id: 3, title: "Chat" },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleOnClickTab = (id: number) => {
    setActiveTab(id);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="flex flex-col gap-7 w-full">
      <ProfileHeader
        username={userData.username}
        mbti={userData.mbti}
        userId={userData.userId}
      />
      <Chart />

      <div className="flex items-center justify-evenly mt-10 ">
        {userActivityTab.map((tab) => (
          <ActivityTab
            tabTitle={tab.title}
            tabId={tab.id}
            activeTab={activeTab}
            onClick={() => handleOnClickTab(tab.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
