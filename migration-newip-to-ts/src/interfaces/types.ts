type NewsSource = {
  id: string | null;
  name: string;
};

export interface INews {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
