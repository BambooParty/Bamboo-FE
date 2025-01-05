export interface CommentsProps {
  nickname: string;
  content: string;
  date: string;
}

// 유저 포스트 조회
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

// 사용가 게시물 업로드
export interface PostData {
  title: string;
  content: string;
  mbti: string;
  nickName: string;
}

export interface GetPost {
  title: string;
  contentSummary: string;
  commentCount: number;
  date: string;
}
