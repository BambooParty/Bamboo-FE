import { useParams } from "react-router";
import CommentBubble from "../components/Board/CommentBubble";
import MbtiBadge from "../components/MbtiBadge";
import { FaRegComment } from "react-icons/fa";
import { GetPost } from "@/types/boardTypes";
import { useEffect, useState } from "react";
import { getPostsWithComments } from "@/api/apis";

const BoardId = () => {
  const { id } = useParams<{ id: string }>();
  const currentUser = "전지현";

  const [postData, setPostData] = useState<GetPost[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const userId = "testUserId";
        const posts = await getPostsWithComments(userId);
        setPostData(posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostData();
  }, []);

  return (
    <div className="flex justify-center items-center  h-screen">
      {postData.map(
        (post) =>
          post.postId === id && (
            <div className="flex flex-col gap-10 rounded-sm">
              <div key={post.postId} className="flex flex-col gap-3 p-5">
                <div className="flex items-center gap-5">
                  <MbtiBadge mbti={post.mbti}></MbtiBadge>
                  <span className="text-xl font-bold">{post.title}</span>
                </div>
                <div>{post.content}</div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span>
                      <FaRegComment />
                    </span>
                    <span>{post.comments.length}</span>
                  </span>
                  <span>|</span> <span>{post.date}</span> <span>|</span>
                  <span>{post.username}</span>
                </div>
              </div>
              <div className="w-full h-[.5px] bg-black"></div>
              <div className="flex flex-col justify-center items-center gap-3">
                {post.comments.map((comment) => (
                  <CommentBubble
                    key={comment.id}
                    comment={comment.comment}
                    username={comment.username}
                    date={comment.date}
                    currentUser={currentUser}
                  />
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default BoardId;
