export interface CommentsProps {
  nickname: string;
  content: string;
  date: string;
}

// 유저 포스트
export interface PostProps {
  id: string;
  mbti: string;
  userId: string;
  title: string;
  contentSummary: string;
  content: string;
  commentCount: number;
  date: string;
  nickname: string;
  comments: CommentsProps[];
}

export interface PostResponse {
  data: {
    posts: {
      title: string;
      contentSummary: string;
      commentCount: number;
      date: string;
    }[];
  };
}
