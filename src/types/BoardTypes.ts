export interface Comments {
  nickname: string;
  content: string;
  date: string;
}
// 포스트 조회
export interface Posts {
  commentCount: number;
  comments: string;
  content: string;
  date: string;
  mbti: string;
  nickname: string;
  postId: string;
  riskScore: number;
  userId: string;
  title: string;
}

// 유저 포스트 상세보기
export interface PostWithComment {
  id: string | null;
  mbti: string;
  title: string;
  date: string;
  nickname: string;
  comments: {
    nickname: string;
    date: string;
    content: string;
  }[];
  commentCount: number;
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

export interface PostItemProps {
  postId: string;
  userId: string;
  mbti: string;
  title: string;
  date: string;
  content: string;
  nickname: string;
  commentCount: number;
  riskScore: number;
  comments: Array<{
    nickname: string;
    date: string;
    content: string;
  }>;
}
