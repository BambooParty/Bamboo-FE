// import { Checkbox } from "@/components/ui/checkbox";
import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import axios from "axios";
import useUserStore from "@/stores/UserStore";
import { useConfigStore } from "@/stores/ConfigStore";
import Avatar from "boring-avatars";

type Message = {
  sender: "HUMAN" | "AI";
  text: string;
};

type IMessageData = {
  id: string;
  userId: string;
  mbti: string;
  chatRoomId: string;
  content: string;
  chatType: "HUMAN" | "AI" | null;
  createdAt: string;
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const { user } = useUserStore();
  const { language } = useConfigStore();
  const [placeholderMessage, setPlaceholderMessage] = useState<string>("");

  useEffect(() => {
    getHistory();
  }, [user]);

  useEffect(() => {
    const loadMessages = async () => {
      const langPack = await import(`@/lib/locales/${language}.json`);
      setPlaceholderMessage(langPack.message);
    };
    loadMessages();
  }, [language]);

  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight; // 스크롤을 아래로 이동
    }
  }, [messages]);

  const getHistory = async () => {
    const { data } = await axios.get(`/api/v1/chats?page=0&size=10`);
    // console.log(data);
    // console.log(user);
    setMessages(
      data.map((message: IMessageData) => {
        return { sender: message.chatType, text: message.content };
      })
    );
  };

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    const newMessage: Message = { sender: "HUMAN", text: userInput };

    sendMessage(newMessage);
    setUserInput("");

    const botMessage: Message = {
      sender: "AI",
      text: await getBotResponse(userInput),
    };
    sendMessage(botMessage);
  };

  const sendMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const getBotResponse = async (input: string): Promise<string> => {
    const res = await axios.post("/api/v1/chats", {
      content: input,
    });

    // if (input.includes("안녕")) return "안녕하세요!";
    return res.data.content;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="max-w-2xl w-screen mt-10 h-[84vh] flex flex-col overflow-y-auto">
      {/* 메시지 영역 */}
      <div
        ref={boxRef}
        className="flex-1 p-4 space-y-4 overflow-y-auto grow scroll-smooth"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "HUMAN" ? "justify-end" : "justify-start"
            } items-start`}
          >
            {/* 봇 프로필 아이콘 */}
            {msg.sender === "AI" && (
              <Avatar
                className="mr-3 -translate-y-2"
                name={user?.nickname}
                variant="beam"
                size={40}
              />
              // <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center mr-3 -translate-y-2"></div>
            )}

            {/* 메시지 버블 */}
            <div
              className={`px-4 py-3 max-w-md animate-fade-in text-start ${
                msg.sender === "HUMAN"
                  ? "bg-yellow-100 text-gray-800 rounded-t-xl rounded-bl-xl"
                  : "bg-blue-50 text-gray-900 rounded-tr-xl rounded-b-xl"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* 입력 영역 */}

      <form
        className="flex flex-col items-center p-2 bg-white w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* <div className="flex space-x-2 w-full ml-4 mb-3 items-center">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            비밀로 할래요
          </label>
        </div> */}
        <div className="flex w-full">
          <div className="flex grow">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder={placeholderMessage}
              className="flex-1 grow peer bg-blue-50 px-4 py-3 rounded-lg shadow-sm mr-2 outline-none placeholder-gray-500 text-gray-800"
            />

            <button
              onClick={handleSend}
              disabled={userInput.length == 0}
              className="px-3 py-3 rounded-full shadow-md hover:bg-bambo bg-bamboo disabled:bg-bamboo-50"
            >
              <svg
                viewBox="0 0 24 20"
                className="w-6 h-6 "
                stroke="white"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2111 2.06722L3.70001 5.94499C1.63843 6.46039 1.38108 9.28612 3.31563 10.1655L8.09467 12.3378C9.07447 12.7831 10.1351 12.944 11.1658 12.8342C11.056 13.8649 11.2168 14.9255 11.6622 15.9053L13.8345 20.6843C14.7139 22.6189 17.5396 22.3615 18.055 20.3L21.9327 4.78886C22.3437 3.14517 20.8548 1.6563 19.2111 2.06722ZM8.92228 10.517C9.85936 10.943 10.9082 10.9755 11.8474 10.6424C12.2024 10.5165 12.5417 10.3383 12.8534 10.1094C12.8968 10.0775 12.9397 10.0446 12.982 10.0108L15.2708 8.17974C15.6351 7.88831 16.1117 8.36491 15.8202 8.7292L13.9892 11.018C13.9553 11.0603 13.9225 11.1032 13.8906 11.1466C13.6617 11.4583 13.4835 11.7976 13.3576 12.1526C13.0244 13.0918 13.057 14.1406 13.4829 15.0777L15.6552 19.8567C15.751 20.0673 16.0586 20.0393 16.1147 19.8149L19.9925 4.30379C20.0372 4.12485 19.8751 3.96277 19.6962 4.00751L4.18509 7.88528C3.96065 7.94138 3.93264 8.249 4.14324 8.34473L8.92228 10.517Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
