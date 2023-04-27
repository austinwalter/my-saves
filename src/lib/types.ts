
export type Post = {
  embed_url: string;
  id: number;
  image: string;
  inserted_at: string;
  short: boolean;
  title: string;
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

export type PostResponseData = {
  post?: Post[];
}