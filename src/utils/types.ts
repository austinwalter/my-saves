
export type Post = {
  id: number;
  url: string;
  short: boolean;
  srcId: string;
}

export type ResponseData = {
  content: Post[],
  lastPage: number
}