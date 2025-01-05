import { PostData, Posts } from "@/types/boardTypes";
import axios from "axios";

// 유저 프로필 조회
export const getUserInfo = async () => {
  try {
    const response = await axios.get(`api/v1/users/me`);
  } catch (error) {
    console.log(error);
  }
};

// 게시판
export const getPosts = async (
  mbti: string,
  userId?: string
): Promise<Posts[] | undefined> => {
  try {
    const response = await axios.get(
      `/api/v1/posts?mbti=${mbti}&userId=${userId ? userId : ""}`
    );
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostsWithComments = async (postId: string) => {
  try {
    const response = await axios.get(`/api/v1/posts/${postId}`);
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
