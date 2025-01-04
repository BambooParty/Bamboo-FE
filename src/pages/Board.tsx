import { RiEditFill } from "react-icons/ri";
import Post from "../components/Board/Post";
import { Input } from "../components/ui/input";
import { postData } from "../data/testData";

const Board = () => {
  return (
    <div className="flex flex-col gap-5">
      {postData.map((post) => (
        <Post
          username={post.username}
          mbti={post.mbti}
          date={post.date}
          title={post.title}
          contents={post.content}
          comments={post.comments}
          postId={post.postId}
        />
      ))}

      <div className="flex items-center gap-3">
        <Input
          className="border-bamboo rounded-full h-14 px-5"
          placeholder="검색"></Input>
        <RiEditFill className="text-5xl bg-bamboo text-white p-2 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Board;
