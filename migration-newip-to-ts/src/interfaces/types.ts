export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

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

export interface IView {
  articles: INews[];
  sources: ISource[];
}

export type UrlLoadOptions = {
  apiKey: string;
  sources?: string;
};

export type LoaderSource = {
  sources: string;
};
