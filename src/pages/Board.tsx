import { useState } from "react";
import Post from "../components/Board/Post";
import WritePostModal from "../components/Board/WritePostModal";
import MbtiButton from "../components/MbtiButton";
import { Input } from "../components/ui/input";
import { postData } from "../data/testData";

const Board = () => {
  const [selectedMbti, setSelectedMbti] = useState<string[]>([
    "i",
    "s",
    "t",
    "j",
  ]);

  const filteredPosts = postData.filter((post) => {
    return (
      post.mbti.length === selectedMbti.length &&
      post.mbti
        .split("")
        .every(
          (mbti, index) =>
            mbti.toLowerCase() === selectedMbti[index].toLowerCase()
        )
    );
  });

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold">
          원하는 MBTI를 선택해서 게시글을 확인해보세요!
        </h2>
        <div className="flex items-center gap-3">
          <MbtiButton
            choices={[
              { value: "i", id: "introvert" },
              { value: "e", id: "extrovert" },
            ]}
            selected={selectedMbti[0]}
            onChange={() => {
              selectedMbti[0] = selectedMbti[0] == "i" ? "e" : "i";
              setSelectedMbti([...selectedMbti]);
            }}
          />
          <MbtiButton
            choices={[
              { value: "s", id: "sensing" },
              { value: "n", id: "intuition" },
            ]}
            selected={selectedMbti[1]}
            onChange={() => {
              selectedMbti[1] = selectedMbti[1] == "s" ? "n" : "s";
              setSelectedMbti([...selectedMbti]);
            }}
          />
          <MbtiButton
            choices={[
              { value: "t", id: "thinking" },
              { value: "f", id: "feeling" },
            ]}
            selected={selectedMbti[2]}
            onChange={() => {
              selectedMbti[2] = selectedMbti[2] == "t" ? "f" : "t";
              setSelectedMbti([...selectedMbti]);
            }}
          />
          <MbtiButton
            choices={[
              { value: "j", id: "judging" },
              { value: "p", id: "perceiving" },
            ]}
            selected={selectedMbti[3]}
            onChange={() => {
              selectedMbti[3] = selectedMbti[3] == "j" ? "p" : "j";
              setSelectedMbti([...selectedMbti]);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {filteredPosts.map((post) => (
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
    </>
  );
};

export default Board;
