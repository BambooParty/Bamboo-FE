import Avatar from "boring-avatars";
import MbtiBadge from "../MbtiBadge";
// import { Button } from "../ui/button";

interface ProfileHeaderProps {
  username: string;
  userId: string;
  mbti: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  userId,
  mbti,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Avatar name={username} variant="beam" size={100} />
        <div className="flex">
          <div className="flex flex-col items-start">
            <div className="flex gap-2">
              <h2 className="text-2xl font-bold">{username}</h2>
              <MbtiBadge mbti={mbti} />
            </div>
            <span>{userId}</span>
          </div>
        </div>
      </div>
      {/* <Button>프로필 수정</Button> */}
    </div>
  );
};

export default ProfileHeader;
