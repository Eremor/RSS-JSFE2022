import { INews, ISource, LoaderSource, UrlLoadOptions } from '../../interfaces/types';

type GetResp = {
  endpoint: string;
  options: LoaderSource | object;
};

class Loader {
  private baseLink: string;
  private options: UrlLoadOptions;

  constructor(baseLink: string, options: UrlLoadOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: GetResp,
    callback = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: LoaderSource | object, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: (data: INews | ISource) => void, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: INews | ISource) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
