import Post from "../components/ui/Board/Post";
import { postData } from "../data/testData";

const Board = () => {
  return (
    <div className="flex flex-col gap-10">
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
    </div>
  );
};

export default Board;
