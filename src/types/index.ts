export type ArticleList = {
  contents: Article[]
  totalCount?: number;
  offset?: number;
  limit?: number;
};

export type Article = {
  id: string;
  title: string;
  detail: string;
  overview: string;
  createdDate: string;
};