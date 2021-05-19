type PageInfoType = {
  resultsPerPage: number;
  totalResults: number;
};

type VideoType = {
  id: string;
  kind: string;
  etag: string;
};

interface VideosRequestProps {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfoType;
  items: Array<VideoType>;
}
