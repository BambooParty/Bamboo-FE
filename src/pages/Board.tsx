import { useEffect, useState } from "react";
import WritePostModal from "../components/Board/WritePostModal";
import MbtiButton from "../components/MbtiButton";
import { Input } from "../components/ui/input";
import PostItem from "@/components/PostItem";
import { GetPost, PostWithComment } from "@/types/boardTypes";
import { getPosts, getPostsWithComments } from "@/api/apis";

const Board = () => {
  const [selectedMbti, setSelectedMbti] = useState<string[]>([
    "i",
    "s",
    "t",
    "j",
  ]);

  const [postData, setPostData] = useState<PostWithComment[] | null>(null);

  useEffect(() => {
    const fetchPostWithComment = async () => {
      try {
        const posts = await getPostsWithComments();
        setPostData(posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostWithComment();
  }, [selectedMbti]);

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold">
          Select your desired MBTI to view the posts!
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
        {postData?.map((post) => (
          <PostItem
            key={post.title}
            date={post.date}
            title={post.title}
            contents={post.comments}
            commentCount={post.commentCount}
          />
        ))}

        <div className="flex items-center gap-3">
          <Input
            className="border-bamboo rounded-full h-14 px-5"
            placeholder="Search"
          />
          <WritePostModal />
        </div>
      </div>
    </>
  );
};

export default Board;
