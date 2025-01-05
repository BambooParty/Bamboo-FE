import React, { useEffect } from "react";
import { Input } from "../components/ui/input";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import useUserStore from "@/stores/UserStore";

interface IUserInfo {
  userId: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IUserInfo>();
  const { setUser, clearUser } = useUserStore();

  const logout = async () => {
    await axios.post("/api/v1/auth/log-out");
    clearUser();
  };

  useEffect(() => {
    logout();
  }, []);

  const navigate = useNavigate();

  const submitHandler = async (formData: IUserInfo) => {
    const { data } = await axios.post("/api/v1/auth/log-in", formData);
    setUser({ ...data });

    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto max-w-lg w-screen">
      <div className="w-full bg-white">
        <div className="p-6 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-7">
            로그인
          </h1>
          <form className="" onSubmit={handleSubmit(submitHandler)}>
            <div className="w-full flex flex-col items-start mb-6">
              <label
                htmlFor="id"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                ID
              </label>
              <Input className="py-6" {...register("userId")} />
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
                id="password"
                required
                {...register("password")}
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
