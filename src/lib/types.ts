
export type Post = {
  id: number;
  inserted_at: string;
  short?: boolean;
  updated_at: string;
  url: string;
  youtube_id: string;
}

export type ResponseData = {
  content: Post[];
  lastPage: number;
}