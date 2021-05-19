type ThumbnailType = {
  url: string;
  width: number;
  height: number;
};

type ThumbnailsType = {
  default: ThumbnailType;
  high: ThumbnailType;
  maxres: ThumbnailType;
  medium: ThumbnailType;
  standard: ThumbnailType;
};

type SnippetType = {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsType;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
};

type PageInfoType = {
  resultsPerPage: number;
  totalResults: number;
};

interface ListRequestProps<T> {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfoType;
  items: Array<T>;
}
