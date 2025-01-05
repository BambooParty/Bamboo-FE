export interface CommentsProps {
  id: string;
  username: string;
  comment: string;
  date: string;
}
export interface PostProps {
  username: string;
  mbti: string;
  title: string;
  postId: string;
  date: string;
  contents: string;
  comments: CommentsProps[];
}
