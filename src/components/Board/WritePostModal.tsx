import { RiEditFill } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

const WritePostModal = () => {
  const [postValue, setPostValue] = useState({
    title: "",
    content: "",
    date: new Date(),
    username: "test", // 유저정보
    mbti: "INFP", // 유저정보
    comments: [], // 댓글
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <RiEditFill className="text-5xl bg-bamboo text-white p-2 rounded-full cursor-pointer transition duration-300 hover:bg-bamboo-accent " />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input value={postValue.title} />
            <Textarea value={postValue.content} />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-bamboo transition duration-300 font-bold hover:bg-bamboo-accent">
            작성
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WritePostModal;
