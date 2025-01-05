import Chart from "@/components/Profile/Chart";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import React from "react";

const userData = {
  id: "1",
  userId: "user1", // 가입한 id
  username: "전지현", // 닉네임
  mbti: "INTP",
};
const Profile = () => {
  return (
    <div className="w-full">
      <ProfileHeader
        username={userData.username}
        mbti={userData.mbti}
        userId={userData.userId}
      />
      <Chart />
    </div>
  );
};

export default Profile;
