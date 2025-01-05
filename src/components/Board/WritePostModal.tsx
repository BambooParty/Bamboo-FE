import { RiEditFill } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { addPost } from "@/api/apis";

const WritePostModal = () => {
  const [postValue, setPostValue] = useState({
    title: "",
    content: "",
    nickName: "test user", // TODO: 로그인 구현 후 자동생성
    mbti: "INFP", // TODO: 로그인 구현 후 자동생성
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addPost({ postData: postValue });
      setPostValue({
        title: "",
        content: "",
        nickName: "test user",
        mbti: "INFP",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <RiEditFill className="text-5xl bg-bamboo text-white p-2 rounded-full cursor-pointer transition duration-300 hover:bg-bamboo-accent " />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Post</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col items-center w-full gap-3 space-x-2"
          onSubmit={handleOnSubmit}>
          <div className="grid flex-1 gap-2">
            <Input
              value={postValue.title}
              className="w-96"
              name="title"
              onChange={handleOnChange}
              placeholder="Title"
              required
            />
            <Textarea
              value={postValue.content}
              className="w-96"
              name="content"
              onChange={handleOnChange}
              placeholder="Contents"
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-bamboo transition duration-300 font-bold hover:bg-bamboo-accent">
            Upload
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WritePostModal;
