import { PostData } from "@/types/boardTypes";
import axios from "axios";

// const baseURL = import.meta.env.VITE_API_BASE_URL;

// 유저 프로필 조회
export const getUserInfo = async () => {
  try {
    const response = await axios.get(`api/v1/users/me`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// 게시판
export const getPosts = async (mbti: string, userId: string) => {
  try {
    const response = await axios.get(
      `/api/v1/posts?mbti=${mbti}&userId=${userId}`
    );
    console.log(response.data);
    return response.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const getPostsWithComments = async () => {
  try {
    const response = await axios.get(`/api/v1/posts`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (postId: string) => {
  try {
    const response = await axios.delete(`/api/v1/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addPost = async ({ postData }: { postData: PostData }) => {
  try {
    const response = await axios.post("api/v1/posts", postData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const addComments = async (postId: string) => {
  try {
    const response = await axios.post(`/api/v1/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (commentsId: string) => {
  try {
    const response = await axios.delete(`/api/v1/comments/${commentsId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 프로필

// 위험도 평가
export const getRiskResults = async (userId: string) => {
  try {
    const response = await axios.get(`/api/v1/risk/history/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// AI 댓글
