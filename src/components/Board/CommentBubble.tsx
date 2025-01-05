import Avatar from "boring-avatars";
import React from "react";

interface CommentBubbleProps {
  comment: string;
  username: string;
  date: string;
}

const CommentBubble: React.FC<CommentBubbleProps> = ({
  comment,
  username,
  date,
}) => {
  const usernick = "www";
  const isCurrentUser = username === usernick;

  return (
    <div
      className={`flex items-start gap-2 mb-4  ${
        isCurrentUser ? "justify-end flex-row-reverse" : "justify-start"
      }`}>
      <div>
        <div
          className={`flex items-center gap-2 ${
            isCurrentUser ? "justify-start flex-row-reverse" : "justify-start "
          }`}>
          <Avatar name={username} size={42} variant="beam" />
          <div
            className={`flex items-center gap-2 ${
              isCurrentUser ? "justify-end" : "justify-start flex-row-reverse"
            }`}>
            <span>{date}</span>
            <span>{username}</span>
          </div>
        </div>
        <div
          className={`max-w-[100%] px-4 py-2 rounded-lg text-sm  ${
            isCurrentUser
              ? "bg-bamboo bg-opacity-5 text-black rounded-br-none mr-11"
              : "bg-bamboo-secondary bg-opacity-5 text-black rounded-bl-none ml-11"
          }`}>
          {comment}
        </div>
      </div>
    </div>
  );
};

export default CommentBubble;
