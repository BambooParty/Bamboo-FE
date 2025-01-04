import Post from "../components/Board/Post";
import WritePostModal from "../components/Board/WritePostModal";
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
          placeholder="검색"
        />
        <WritePostModal />
      </div>
    </div>
  );
};

export default Board;
