import React, { useState } from "react";
import { Input } from "../components/ui/input";
import MbtiButton from "../components/MbtiButton";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

interface IFormInput {
  userId: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const Signup: React.FC = () => {
  const [mbti, setMbti] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();

  const submitHandler = async (formData: IFormInput) => {
    const { data } = await axios.post("/api/v1/auth/sign-up", {
      userId: formData.userId,
      nickname: formData.nickname,
      password: formData.password,
      mbti: mbti.join("").toUpperCase(),
    });

    navigate("/");

    console.log(data);
    return "";
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto max-w-lg w-screen ">
      <div className="w-full bg-white">
        <div className="p-6 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-7">
            회원가입
          </h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="w-full flex flex-col items-start">
              <label
                htmlFor="nickname"
                className="mb-1 text-sm font-medium text-gray-900"
              >
                Nickname
              </label>
              <Input className="py-5" {...register("nickname")} />
            </div>
            <div className="w-full flex flex-col items-start">
              <label
                htmlFor="id"
                className="mb-1 text-sm font-medium text-gray-900"
              >
                ID
              </label>
              <Input className="py-5" {...register("userId")} />
            </div>
            <div className="w-full flex flex-col items-start">
              <label
                htmlFor="id"
                className="mb-1 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <Input
                className="py-5"
                type="password"
                id="password"
                required
                {...register("password")}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label
                htmlFor="confirm"
                className="mb-1 text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <Input
                className="py-5"
                type="password"
                id="password"
                required
                {...register("passwordConfirm")}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label className="text-start">
                MBTI
                <div className="text-center">
                  나의 MBTI:{" "}
                  <span className="font-bold">
                    {" "}
                    {mbti.join("").toUpperCase()}
                  </span>
                </div>
                <fieldset className="p-4 flex gap-3">
                  <MbtiButton
                    choices={[
                      { value: "i", id: "introvert" },
                      { value: "e", id: "extrovert" },
                    ]}
                    selected={mbti[0]}
                    onChange={() => {
                      mbti[0] = mbti[0] == "i" ? "e" : "i";
                      setMbti([...mbti]);
                    }}
                  />
                  <MbtiButton
                    choices={[
                      { value: "s", id: "sensing" },
                      { value: "n", id: "intuition" },
                    ]}
                    selected={mbti[1]}
                    onChange={() => {
                      mbti[1] = mbti[1] == "s" ? "n" : "s";
                      setMbti([...mbti]);
                    }}
                  />
                  <MbtiButton
                    choices={[
                      { value: "t", id: "thinking" },
                      { value: "f", id: "feeling" },
                    ]}
                    selected={mbti[2]}
                    onChange={() => {
                      mbti[2] = mbti[2] == "t" ? "f" : "t";
                      setMbti([...mbti]);
                    }}
                  />
                  <MbtiButton
                    choices={[
                      { value: "j", id: "judging" },
                      { value: "p", id: "perceiving" },
                    ]}
                    selected={mbti[3]}
                    onChange={() => {
                      mbti[3] = mbti[3] == "j" ? "p" : "j";
                      setMbti([...mbti]);
                    }}
                  />
                </fieldset>
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-bamboo hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
