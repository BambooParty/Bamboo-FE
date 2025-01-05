import axios from "axios";
import { data } from "react-router";

// const baseURL = import.meta.env.VITE_API_BASE_URL;
const baseURL = "http://localhost:3000";

// 게시판
export const getPosts = async (mbti: string, userId: string) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/v1/posts?mbti=${mbti}&userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostsWithComments = async (postId: string) => {
  try {
    const response = await axios.get(`${baseURL}/api/v1/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (postId: string) => {
  try {
    const response = await axios.delete(`${baseURL}/api/v1/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

interface PostData {
  title: string;
  content: string;
  mbti: string;
  nickName: string;
}

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
    const response = await axios.post(`${baseURL}/api/v1/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (commentsId: string) => {
  try {
    const response = await axios.delete(
      `${baseURL}/api/v1/comments/${commentsId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 프로필

// 위험도 평가
export const getRiskResults = async (userId: string) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/v1/risk/history/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// AI 댓글
