
export type Post = {
  id: number;
  insertedAt: string;
  short?: boolean;
  updatedAt: string;
  url: string;
  youtubeId: string;
}

export type ResponseData = {
  content: Post[];
  lastPage: number;
}