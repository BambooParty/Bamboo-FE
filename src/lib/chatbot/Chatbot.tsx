import React, { useState, ChangeEvent } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const handleSend = () => {
    if (userInput.trim() === "") return;

    const newMessage: Message = { sender: "user", text: userInput };

    sendMessage(newMessage);
    setUserInput("");

    const botMessage: Message = {
      sender: "bot",
      text: getBotResponse(userInput),
    };
    sendMessage(botMessage);
  };

  const sendMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const getBotResponse = (input: string): string => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    if (input.includes("안녕")) return "안녕하세요!";
    return "질문에 답할 준비가 되어 있습니다.";
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="max-w-2xl w-screen mt-10 h-[84vh] flex flex-col overflow-y-auto">
      {/* 메시지 영역 */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto ">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } items-center`}
          >
            {/* 봇 프로필 아이콘 */}
            {msg.sender === "bot" && (
              <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center mr-3 -translate-y-2">
                <span className="text-lg font-bold">😊</span>
              </div>
            )}

            {/* 메시지 버블 */}
            <div
              className={`px-4 py-3 max-w-xs animate-fade-in ${
                msg.sender === "user"
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
        className="flex items-center p-2 bg-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-1 ">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="메시지를 입력하세요..."
            className="flex-1 peer bg-blue-50 px-4 py-3 rounded-lg shadow-sm mr-2 outline-none placeholder-gray-500 text-gray-800"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.2111 2.06722L3.70001 5.94499C1.63843 6.46039 1.38108 9.28612 3.31563 10.1655L8.09467 12.3378C9.07447 12.7831 10.1351 12.944 11.1658 12.8342C11.056 13.8649 11.2168 14.9255 11.6622 15.9053L13.8345 20.6843C14.7139 22.6189 17.5396 22.3615 18.055 20.3L21.9327 4.78886C22.3437 3.14517 20.8548 1.6563 19.2111 2.06722ZM8.92228 10.517C9.85936 10.943 10.9082 10.9755 11.8474 10.6424C12.2024 10.5165 12.5417 10.3383 12.8534 10.1094C12.8968 10.0775 12.9397 10.0446 12.982 10.0108L15.2708 8.17974C15.6351 7.88831 16.1117 8.36491 15.8202 8.7292L13.9892 11.018C13.9553 11.0603 13.9225 11.1032 13.8906 11.1466C13.6617 11.4583 13.4835 11.7976 13.3576 12.1526C13.0244 13.0918 13.057 14.1406 13.4829 15.0777L15.6552 19.8567C15.751 20.0673 16.0586 20.0393 16.1147 19.8149L19.9925 4.30379C20.0372 4.12485 19.8751 3.96277 19.6962 4.00751L4.18509 7.88528C3.96065 7.94138 3.93264 8.249 4.14324 8.34473L8.92228 10.517Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
