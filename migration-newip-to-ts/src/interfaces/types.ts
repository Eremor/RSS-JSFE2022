export interface ISource {
  id: string | null;
  name: string;
}

export interface INews {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
