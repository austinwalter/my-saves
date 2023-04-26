
export type Post = {
  id: number;
  inserted_at: string;
  short?: boolean;
  updated_at: string;
  url: string;
  youtube_id: string;
}

export type PostListResponseData = {
  posts: Post[];
  next: number;
  prev: number;
  limit: number;
}