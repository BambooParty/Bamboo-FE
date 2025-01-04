import React from "react";
import MbtiBadge from "../MbtiBadge";
import { PostProps } from "../../../types/BoardTypes";
import { useNavigate } from "react-router";

const Post: React.FC<PostProps> = ({
  username,
  mbti,
  title,
  date,
  contents,
  comments,
  postId,
}) => {
  const navigate = useNavigate();

  const handlePostClick = (postId: string) => {
    navigate(`/board/${postId}`);
  };

  return (
    <div
      className="p-5 rounded-sm cursor-pointer hover:bg-gray-100"
      onClick={() => handlePostClick(postId)}>
      <div className="flex items-center gap-3">
        <MbtiBadge mbti={mbti} />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <h2>{contents}</h2>

      <div className="flex items-center gap-3">
        <h2>{comments.length}</h2> <span>|</span> <h2>{date}</h2> <span>|</span>
        <h2>{username}</h2>
      </div>
    </div>
  );
};

export default Post;
