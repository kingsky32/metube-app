import { AxiosResponse } from 'axios';

declare type ThumbnailType = {
  url: string;
  width: number;
  height: number;
};

declare type ThumbnailsType = {
  default: ThumbnailType;
  high: ThumbnailType;
  maxres: ThumbnailType;
  medium: ThumbnailType;
  standard: ThumbnailType;
};

declare type SnippetType = {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsType;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
};

declare type PageInfoType = {
  resultsPerPage: number;
  totalResults: number;
};

declare interface ListRequestProps<T> {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfoType;
  items: Array<T>;
}

declare type ApiType<T> = Promise<AxiosResponse<T>>;
