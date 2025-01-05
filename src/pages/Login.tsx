import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { Link } from "react-router";
import useUserStore from "@/stores/UserStore";
import axios from "axios";

const Login: React.FC = () => {
  const [userId, setUserId] = useState("");
  const { user, setUser, clearUser } = useUserStore();
  useEffect(() => {
    clearUser();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    // await axios.post("/api/v1/login")
    e.preventDefault();
    setUser({ userId: userId, nickname: "user" });
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto max-w-lg w-screen">
      <div className="w-full bg-white">
        <div className="p-6 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-7">
            로그인
          </h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col items-start mb-6">
              <label
                htmlFor="id"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                ID
              </label>
              <Input
                className="py-6"
                onChange={(e) => setUserId(e.target.value)}
                value={userId}
              />
            </div>
            <div className="w-full flex flex-col items-start mb-6">
              <label
                htmlFor="id"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <Input
                className="py-6"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-bamboo hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              로그인
            </button>
            <p className="text-sm font-light text-gray-500 mt-4">
              계정이 없으신가요?
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline ml-2"
              >
                회원가입
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
