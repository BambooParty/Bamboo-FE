import React from "react";
import { useNavigate } from "react-router";
import { FaRegComment } from "react-icons/fa";
import MbtiBadge from "./MbtiBadge";
import { UserPostProps } from "@/types/boardTypes";

const PostItem: React.FC<UserPostProps> = ({
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
        <span className="flex items-center gap-1">
          <span>
            <FaRegComment />
          </span>
          <span>{comments.length}</span>
        </span>
        <span>|</span> <span>{date}</span> <span>|</span>
        <span>{username}</span>
      </div>
    </div>
  );
};

export default PostItem;
