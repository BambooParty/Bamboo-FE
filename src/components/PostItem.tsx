import React from "react";
// import { useNavigate } from "react-router";
import { PostItemProps } from "@/types/BoardTypes";

const PostItem: React.FC<PostItemProps> = ({}) => {
  // const navigate = useNavigate();
  // const handlePostClick = (title: string) => {
  //   navigate(`/board/${title}`);
  // };
  return (
    <></>
    // <div
    //   className="p-5 rounded-sm cursor-pointer hover:bg-gray-100"
    //   onClick={() => handlePostClick(title)}>
    //   <div className="flex items-center gap-3">
    //     <MbtiBadge mbti="INTP" />
    //     <h2 className="text-xl font-bold">{title}</h2>
    //   </div>
    //   <h2>{contents}</h2>

    //   <div className="flex items-center gap-3">
    //     <span className="flex items-center gap-1">
    //       <span>
    //         <FaRegComment />
    //       </span>
    //       <span>{commentCount}</span>
    //     </span>
    //     <span>|</span> <span>{date}</span> <span>|</span>
    //     <span>{"test user"}</span>
    //   </div>
    // </div>
  );
};

export default PostItem;
